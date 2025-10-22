import '../styles/tooltip.css'

export function Tooltip({message}: {message: string} ) {
  return (
      <div className="tooltip-container">
        <p className="tooltip">
            {message}
        </p>
      </div>
  );
}
