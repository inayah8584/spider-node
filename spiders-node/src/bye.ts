
export const test: any = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Bye spider bye',
            name: 'ali',
            input: event,
        }, null, 2),
    };
}
