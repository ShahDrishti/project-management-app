import NewTask from "./NewTask";

export default function () {
    return (
        <section>
            <h2 className="test-2xl font-bold text-slate-700 md-4">Tasks</h2>
            <NewTask />
            <p className="text-stone-800 mb-4">Tis project does not have any tasks yet.</p>
            <ul>

            </ul>
        </section>
    );
}