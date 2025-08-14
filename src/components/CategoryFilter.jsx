import { FilterWrapper, FilterButton } from './CategoryFilter.styled';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const allCategories = ['All', ...categories];

  return (
    <FilterWrapper>
      {allCategories.map((category) => (
        <FilterButton
          key={category}
          $active={selectedCategory === category || (category === 'All' && !selectedCategory)}
          onClick={() => onCategoryChange(category === 'All' ? '' : category)}
        >
          {category}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
}

export default CategoryFilter;