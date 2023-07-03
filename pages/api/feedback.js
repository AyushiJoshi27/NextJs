import fs from 'fs';
import path from 'path';

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

//to get the file data
export const extractFeedback = (fielPath) => {
  const fileData = fs.readFileSync(fielPath);
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email, 
      text: feedbackText,
    }

    //store that in a database or in a file
    const fielPath = buildFeedbackPath();
    const data = extractFeedback(fielPath);
    data.push(newFeedback);
    fs.writeFileSync(fielPath, JSON.stringify(data));
    res.status(201).json({message: 'Success!', feedback: newFeedback });
  } else {
    const fielPath = buildFeedbackPath();
    const data = extractFeedback(fielPath);
    res.status(200).json({feedback: data});
  }
}
