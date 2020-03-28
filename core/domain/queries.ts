export const STATES_SQL: string =
    `WITH upsert AS (
        UPDATE Public.casesstateperday
        SET
            newcases = $4, 
            totalcases = $5 
        WHERE
            casesstateperday.date = $1 AND
            casesstateperday.country = $2 AND
            casesstateperday.state_id = (SELECT Id FROM Public.State WHERE abbreviation = $3)
        RETURNING *
    )
    INSERT INTO Public.casesstateperday (
        "date", 
        country,
        state_id, 
        newcases, 
        totalcases
    )
    SELECT
        $1, $2, (SELECT Id FROM Public.State WHERE abbreviation = $3), $4, $5
    WHERE
        NOT EXISTS (SELECT 1 FROM upsert);`;

export const TRUNCATE_CITIES_SQL = 'TRUNCATE Public.casespercity;';

export const CITIES_SQL =
    `WITH upsert AS (
        UPDATE Public.casespercity 
        SET
            ibge_id = $4,
            totalcases = $5
        WHERE
            casespercity.country = $1 AND
            casespercity.state_id = (SELECT Id FROM Public.State WHERE abbreviation = $2) and
            casespercity.city like '%$3%'
        RETURNING *
    )
    INSERT INTO Public.casespercity (
        country, 
        state_id, 
        city,
        ibge_id, 
        totalcases 
    ) 
    SELECT
        $1, (SELECT Id FROM Public.State WHERE abbreviation = $2), $3, $4, $5
    WHERE
        NOT EXISTS (SELECT 1 FROM upsert);`;

export const TOTAL_SQL =
    `WITH upsert AS (
        UPDATE Public.casesperstate
        SET
            totalcases = $3, 
            totalcasesms = $4, 
            notconfirmedbyms = $5, 
            deaths = $6, 
            url = $7
        WHERE
            casesperstate.country = $1 and
            casesperstate.state_id = (SELECT Id FROM Public.State WHERE abbreviation = $2)
        RETURNING *
    )
    INSERT INTO Public.casesperstate (
        country, 
        state_id, 
        totalcases, 
        totalcasesms, 
        notconfirmedbyms, 
        deaths, 
        url
    )
    SELECT
        $1, (SELECT Id FROM Public.State WHERE abbreviation = $2), $3, $4, $5, $6, $7
    WHERE
        NOT EXISTS (SELECT 1 FROM upsert);`;