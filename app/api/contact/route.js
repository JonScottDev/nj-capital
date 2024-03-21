// pages/api/contact.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process the form data
    const { name, email, phone, question } = req.body;

    // Forward the form data to the external service
    try {
      const response = await fetch(
        "https://formsubmit.co/jhscott12@email.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            question,
          }),
        }
      );

      // Check if the submission was successful
      if (response.ok) {
        return res.status(200).json({ message: "Form submitted successfully" });
      } else {
        return res.status(500).json({ error: "Failed to submit form" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
