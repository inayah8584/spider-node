export const test: any = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'buhat ho gaya',
            name: 'ali',
            input: event,
        }, null, 2),
    };
}
