
const BASE_URL = 'https://apis.beta.bosframework.com';

export default {

    APP_KEY: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2E5NDNjNi1iMThiLTRiZjItOWQyNi02ODNhZTg2NTQ0ZDIiLCJzdWIiOiJCT1NBcGlLZXkiLCJpYXQiOjE1NzA1MjU3MzYsImFjY291bnQiOiIxYzA3NzhmMC04ZDBiLTQ0NTgtODRkYy1iZTAxNmEwNDljNGUiLCJwcm9qZWN0IjoiYjA5N2U1M2UtYjYzNS00NGQ5LTk4ODEtMDEyZDY4OWRmYWIzIiwidGVuYW50IjoiZTRmNGQyNjQtOGMxMi00ZDJhLWE1YjktMDNjOTQ4NzhjZTE3In0.wJegE-UuJINqweszpLvm0hYsUs3g6NPcwY9YXisLp9o',

    SIGNIN: `${BASE_URL}/auth/odata/Verification?api-version=1.0`,
    SIGNUP: `${BASE_URL}/auth/odata/Users`,
    GET_USER_DATA: `${BASE_URL}/auth/odata/Users`,
    UPDATE_USER_DATA: `${BASE_URL}/auth/odata/Users`,
    GET_USER_ID: `${BASE_URL}/auth/odata/users?$filter=email eq `,
    FORGOT_PASSWORD: `${BASE_URL}/auth/odata/Users`,
    SEND_EMAIL: `${BASE_URL}/email/odata/email`
};
