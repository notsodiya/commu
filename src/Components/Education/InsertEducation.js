// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const InsertEducation = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         FamilyMemberId: localStorage.getItem('FamilyMemberId'),
//         Qualification: '',
//         PassingYear: '',
//         Schooling: '',
//         Organisation: '',
//         GPA: ''
//     });
//     const [familyMembers, ] = useState([]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//         try {
//             await axios.post('http://localhost:51294/api/Education/InsEducation', formData);
//             alert('Family member added successfully!');
//             onClose(); // Close the popup
//             // After successful submission, fetch and update the list of family members
//             fetchFamilyMembers();
//         } catch (error) {
//             alert('Error occurred while adding family member');
//             console.error(error);
//         }
//     };

//     // const fetchFamilyMembers = async () => {
//     //     try {
//     //         const response = await axios.get('http://localhost:51294/api/GetEducationById');
//     //         setFamilyMembers(response.data); // Assuming your API returns an array of family members
//     //     } catch (error) {
//     //         console.error('Error fetching family members:', error);
//     //     }
//     // };


//     const fetchFamilyMembers = async () => {
//         try {
//             const response = await axios.get('http://localhost:51294/api/GetEducationById');
//             // Handle success, update state with the fetched data
//             console.log('Fetched data:', response.data);
//             // Update state with fetched data to trigger re-rendering
//         } catch (error) {
//             // Handle error
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchFamilyMembers(); // Fetch family members on component mount
//     }, []);

//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <h2>Add Family Member</h2>
//                 <input type="text" name="Qualification" placeholder="Qualification" onChange={handleChange} />
//                 <input type="number" name="PassingYear" placeholder="Passing Year" onChange={handleChange} />
//                 <input type="text" name="Schooling" placeholder="Schooling" onChange={handleChange} />
//                 <input type="text" name="Organisation" placeholder="Organisation" onChange={handleChange} />
//                 <input type="number" name="GPA" placeholder="GPA" onChange={handleChange} />
//                 <button onClick={handleSubmit}>Add</button>
//                 <button onClick={onClose}>Cancel</button>
//             </div>
//             <div>cc    
//                 <h2>Family Members</h2>
//                 <ul>
//                     {familyMembers.map((member, index) => (
//                         <li key={index}>
//                             {member.Qualification}, {member.PassingYear}, {member.Schooling}, {member.Organisation}, {member.GPA}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default InsertEducation;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsertEducation = ({ onClose }) => {
    const [formData, setFormData] = useState({
        FamilyMemberId: localStorage.getItem('FamilyMemberId'),
        Qualification: '',
        PassingYear: '',
        Schooling: '',
        Organisation: '',
        GPA: ''
    });
    const [educationData, setEducationData] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:51294/api/Education/InsEducation', formData);
            alert('Education data added successfully!');
            onClose(); // Close the popup
        } catch (error) {
            alert('Error occurred while adding education data');
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:51294/api/GetEducation');
                setEducationData(response.data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };

        fetchData();
    }, [formData.FamilyMemberId]);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Family Member</h2>
                <input type="text" name="Qualification" placeholder="Qualification" onChange={handleChange} />
                <input type="number" name="PassingYear" placeholder="Passing Year" onChange={handleChange} />
                <input type="text" name="Schooling" placeholder="Schooling" onChange={handleChange} />
                <input type="text" name="Organisation" placeholder="Organisation" onChange={handleChange} />
                <input type="number" name="GPA" placeholder="GPA" onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
            {/* Display education data in a table */}
            <h2>Education Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Qualification</th>
                        <th>Passing Year</th>
                        <th>Schooling</th>
                        <th>Organisation</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>
                    {educationData.map((education, index) => (
                        <tr key={index}>
                            <td>{education.Qualification}</td>
                            <td>{education.PassingYear}</td>
                            <td>{education.Schooling}</td>
                            <td>{education.Organisation}</td>
                            <td>{education.GPA}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InsertEducation;