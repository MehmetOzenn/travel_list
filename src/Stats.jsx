export default function Stats({ items }) {

  if (!items.length) return (
    <p className="stats">
      Start adding some items to your packing list 🚀
    </p>
  );

  const numberItems = items.length;
  const packedNumber = items.filter((item) => item.packed).length;
  const percentage = packedNumber / numberItems * 100;

  return (
    <footer className='stats'>
      <em>
        {percentage == 100
          ? 'You got everything. Ready to go ✈️'
          : `💼 You have ${numberItems} items on your list, and you already packed ${packedNumber} (${percentage}%)`}
      </em>
    </footer>
  );
}
