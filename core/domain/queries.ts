export const STATES_SQL: string =
    `WITH upsert AS (
        UPDATE Public.statesperday
        SET
            newcases = $4, 
            totalcases = $5 
        WHERE
            statesperday.date = $1 AND
            statesperday.country = $2 AND
            statesperday.state = $3
        RETURNING *
    )
    INSERT INTO PUBLIC.statesperday (
        "date", 
        country,
        state, 
        newcases, 
        totalcases
    )
    SELECT
        $1, $2, $3, $4, $5
    WHERE
        NOT EXISTS (SELECT 1 FROM upsert);`;

export const CITIES_SQL =
    `WITH upsert AS (
        UPDATE Public.city 
        SET
            totalcases = $4
        WHERE
            city.country = $1 AND
            city.state = $2 and
            city.city = $3
        RETURNING *
    )
    INSERT INTO Public.city (
        country, 
        state, 
        city, 
        totalcases 
    ) 
    SELECT
        $1, $2, $3, $4
    WHERE
        NOT EXISTS (SELECT 1 FROM upsert);`;

export const TOTAL_SQL =
    `WITH upsert AS (
        UPDATE PUBLIC.state
        SET
            totalcases = $3, 
            totalcasesms = $4, 
            notconfirmedbyms = $5, 
            deaths = $6, 
            url = $7
        WHERE
            state.country = $1 and
            state.state = $2
        RETURNING *
    )
    INSERT INTO PUBLIC.state (country, 
        state, 
        totalcases, 
        totalcasesms, 
        notconfirmedbyms, 
        deaths, 
        url
    )
    SELECT
        $1, $2, $3, $4, $5, $6, $7
    WHERE
        NOT EXISTS (SELECT 1 FROM upsert);`;