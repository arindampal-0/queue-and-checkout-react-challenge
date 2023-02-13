type Props = {
    queue: number[];
    qIndex: number;
};

function Queue({ queue, qIndex }: Props) {
    return (
        <div className="flex w-24 flex-col items-center justify-start gap-2 rounded border border-blue-300 py-4">
            <div className="flex h-16 w-16 items-center justify-center rounded bg-blue-600 text-xl font-bold text-white">
                {qIndex}
            </div>
            {queue.map((person, index) => (
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-semibold text-white"
                    key={index}
                >
                    {person}
                </div>
            ))}
        </div>
    );
}

export default Queue;
