export const load = ({ fetch }) => {
    const fetchDatabase = async () => {
        const response = await fetch('./api/page')
        const json = await response.json();
        const items = json.body;
        return items;
    }
    const items = fetchDatabase();
    return { items };
}
