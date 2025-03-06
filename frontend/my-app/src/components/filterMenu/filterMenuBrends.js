import "./filterMenuBrends.scss"

const FilterMenuBrends = () => {
    return (
        <div class="checkbox-container">
            <label class="checkbox-label">
                <input type="checkbox" name="checkbox1" />
                Фильтр 1
            </label>
        <label class="checkbox-label">
            <input type="checkbox" name="checkbox2" />
            Фильтр 2
        </label>
        <label class="checkbox-label">
            <input type="checkbox" name="checkbox3" />
            Фильтр 3
        </label>
</div>
    )
}

export default FilterMenuBrends;