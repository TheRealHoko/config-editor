import './Navbar.css'

export default function Navbar({appName}: {appName: string}) {
    const configTypes = ["compose.yml", "netplan.yml"]
    return (
        <header>
            <div className="Navbar">
                <h3 className="Title">{appName}</h3>
                <select className="Config-type" name="config-type" id="config-type">
                    {configTypes.map(config => (
                        <option value={config}>{config}</option>
                    ))}
                </select>
            </div>
        </header>
    )
}