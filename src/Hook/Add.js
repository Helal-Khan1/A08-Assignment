const getStoreApps = () => {
    const appsStore = localStorage.getItem('install')
    if (appsStore) {
        return JSON.parse(appsStore)
    } else {
        return []
    }
}

const addApp = (e) => {

    const storedApps = getStoreApps()


    if (storedApps.includes(e)) {
        return

    } else {
        storedApps.push(e)


        localStorage.setItem('install', JSON.stringify(storedApps))
    }
}

export { addApp, getStoreApps }