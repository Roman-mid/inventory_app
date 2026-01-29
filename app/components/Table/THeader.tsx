import Th from './Th';

const labels = ['Name', 'SKU', 'Price', 'Quantity', 'Low Stock At', 'Actions'];

const THeader = () => {
  return (
    <thead className='bg-gray-50'>
      <tr>
        {labels.map((label, ind) => (
          <Th key={ind}>{label}</Th>
        ))}
      </tr>
    </thead>
  );
};

export default THeader;
