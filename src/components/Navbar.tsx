const Navbar = () => {
    return (
        <div className="flex flex-row justify-between w-full bg-white border border-b-slate-300 items-center sticky" style={{ padding: "15px 20% 15px 20%" }}>
            <h1 className="text-2xl font-2">Emre Güven</h1>
            <div className="flex gap-8 flex-row font-2 text-base">
                <a>Home</a>
                <a>About</a>
                <a>Experience</a>
                <a>Services</a>
                <a>Projects</a>
            </div>
        </div>
    );
}

export default Navbar;