import { useEffect, useState } from "react";

const TO_Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Récupérer les tâches depuis le localStorage lors du chargement de la page
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Sauvegarder les tâches dans le localStorage à chaque mise à jour
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            const newTask = {
                id: new Date().getTime(),
                title: task,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setTask('');
        }
    };

    const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        const sortedTasks = updatedTasks.sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return 0;
        });

        setTasks(sortedTasks);
    };

    const handleDeleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    };

    return (
        <div id="todo">
            <div className="w-72">
                <h1 className="text-2xl font-bold my-4">Todo List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={task}
                        onChange={handleInputChange}
                        className="border border-blue-500 rounded-l px-2 w-full"
                    />
                    <button
                        onClick={handleAddTask}
                        className="bg-blue-500 text-white rounded-r px-2 py-2"
                    >
                        Ajouter
                    </button>
                </div>
                <ul className="">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`flex items-center justify-between px-2 border-b border-gray-300 py-2 transition-transform duration-500 z-0 ${task.completed ? 'bg-green-200 transform translate-y-full z-10' : ''
                                }`}
                        >
                            <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task.id)}
                                className="border border-blue-500 rounded mr-2"
                            />
                            <span
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            >
                                {task.title}
                            </span>
                            </div>
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="text-white p-1 ml-2 bg-red-500 rounded"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TO_Todo;