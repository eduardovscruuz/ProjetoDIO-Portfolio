async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/eduardovscruuz/FormacaoDIO-Javascript/refs/heads/main/DesafioDIO-Portfolio/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}