


const Filter = () => {

    const employment = [
        { name: "Full-time", count: 3 },
        { name: "Part-Time", count: 5 },
        { name: "Remote", count: 2 },
        { name: "Internship", count: 24 },
        { name: "Contract", count: 3 },
    ];

    return (
        <div className="w-[280px] border-r pr-6 space-y-8">

            {/* Type of Employment */}
            <div>
                <h3 className="font-semibold text-[#25324B] mb-4">
                    Type of Employment
                </h3>

                {employment.map((item, i) => (
                    <label key={i} className="flex items-center gap-3 mb-3 cursor-pointer">
                        <input type="checkbox" />
                        <span className="text-[#515B6F]">
                            {item.name} ({item.count})
                        </span>
                    </label>
                ))}
            </div>

            {/* Categories */}
            <div>
                <h3 className="font-semibold text-[#25324B] mb-4">
                    Categories
                </h3>

                <label className="flex items-center gap-3 mb-3">
                    <input type="checkbox" />
                    Design (24)
                </label>

                <label className="flex items-center gap-3 mb-3">
                    <input type="checkbox" />
                    Marketing (3)
                </label>

                <label className="flex items-center gap-3 mb-3">
                    <input type="checkbox" defaultChecked />
                    Business (3)
                </label>
            </div>

        </div>
    );
};


export default Filter