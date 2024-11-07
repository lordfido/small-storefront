export const getQueryParams = () => {
    // Obtiene los parámetros de búsqueda
    const rawQueryParams = location.search?.replace(/^\?/, "");

    // Si hay varios parámetros
    const queryParamsArr = rawQueryParams.includes("&")
        ? rawQueryParams.split("&") // los separa.
        : [rawQueryParams]; // si no, lo mete en un array

    // Convierte el array en un objeto
    const queryParams = queryParamsArr.reduce((aggr, curr) => {
        const [key, value] = curr.split("=");
        return {
            ...aggr,
            [key]: value,
        };
    }, {});

    return queryParams;
}