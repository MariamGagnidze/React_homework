export function Tags(props) {
  const { className, h1 }=props
    return (
      <div className={className}>
        <h1>{h1}</h1>
        <ul>
          <li>Travel</li>
          <li>New York</li>
          <li>London</li>
          <li>IKEA</li>
          <li>NORWAY</li>
          <li>DIY</li>
          <li>Ideas</li>
          <li>Baby</li>
          <li>Family</li>
          <li>News</li>
          <li>Clothing</li>
          <li>Shopping</li>
          <li>Sports</li>
          <li>Games</li>
        </ul>
      </div>
    );
  }