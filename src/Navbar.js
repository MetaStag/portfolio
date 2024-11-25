export default function Navbar() {
    return (
        <div className="bg-[#90E0EF] m-4 py-6 rounded-xl flex justify-between items-center p-4">
            <span className="font-bold flex-1">MetaStag</span>
            <div className="space-x-12">
                <span>Projects</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </div>
    )
}