import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../App.css'; // Ensure CSS is imported
import html2canvas from 'html2canvas';

function VisitingCardGenerator() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    transition: 'all 0.3s ease'
  };

  const handleDownload = () => {
    const cardElement = document.querySelector('.visiting-card');
    html2canvas(cardElement, { scale: 5 , useCORS:true}).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${name}-visiting-card.png`;
      link.click();
    });
  };


  return (
    <div>
      <h2 className='subheading'>Create your very own Visiting Card in just <span className='span'>2 minutes</span>!</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Job Title:</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
      </form>
      <div className="visiting-card" style={cardStyle}>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{jobTitle}</p>
      </div>
      <div className="button-container">
        <button 
          className="theme-toggle-btn" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Change to {theme === 'dark' ? 'Light' : 'Dark'} Color
        </button>
        <button className="download-btn" onClick={handleDownload}>Download Card</button>
      </div>
    </div>
  );
}

export default VisitingCardGenerator;
