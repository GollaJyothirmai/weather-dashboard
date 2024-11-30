import './index.css'

const CheckList = () => (
  <div className="bg-container">
    <h1 className="heading">Assignment Completion CheckList</h1>
    <ul className="Checklist-container">
      <li className="checklist">
        <input type="checkbox" id="label1" />
        <label htmlFor="label1">
          I have completed all the functionalities asked in the assignment
        </label>
      </li>
      <li className="checklist">
        <input type="checkbox" id="label2" />
        <label htmlFor="label2">
          I have used only the resources (Frameworks, Design files, APIs,
          third-party packages) mentioned in the assignment
        </label>
      </li>
      <li className="checklist">
        <input type="checkbox" id="label3" />
        <label htmlFor="label3">
          I have modified the README.md file based on my assignment instructions
        </label>
      </li>
      <li className="checklist">
        <input type="checkbox" id="label4" />
        <label htmlFor="label4">I have completed the assignment ON TIME</label>
      </li>
    </ul>
  </div>
)
export default CheckList
