import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <div className="Section-header">
      <h1 className="Page-title" id="page-title">Hello, {props.personName} {props.personSurname}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default SectionHeader;