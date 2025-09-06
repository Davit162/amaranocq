export default function Zexjdiv() {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-6">
            {[1, 2, 3].map((num) => (
                <div
                    key={num}
                    className="flex-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                >
                    <img
                        src={`/zexjimg/image${num}.png`}
                        alt={`zexj ${num}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
