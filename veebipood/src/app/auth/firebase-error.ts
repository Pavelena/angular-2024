export type FirebaseError = {
    error: {
        error: {
            code: number,
            message: string,
            errors: []
        }
    },
    headers: {

    },
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url: string
}