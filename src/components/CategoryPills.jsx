function CategoryPills({ setCategory }) {

    return (

        <div className="category-pills">

            <button
                onClick={() => setCategory("TV")}
            >
                TV Shows
            </button>

            <button
                onClick={() => setCategory("Movies")}
            >
                Movies
            </button>

            <button
                onClick={() => setCategory("All")}
            >
                Categories
            </button>

        </div>

    );
}

export default CategoryPills;