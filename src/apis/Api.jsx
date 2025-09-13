// Function to add job post (with image upload)
export async function addJobPost(formDataObj) {
  try {
    const formData = new FormData();
    for (const key in formDataObj) {
      if (key === 'selectedDistricts') {
        formData.append(key, JSON.stringify(formDataObj[key]));
      } else if (formDataObj[key] !== null && formDataObj[key] !== undefined) {
        formData.append(key, formDataObj[key]);
      }
    }
    const response = await fetch(`${API_BASE_URL}/jobpost/add`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      toast.success('Job post submitted successfully!');
      return data;
    } else {
      toast.error(data.message || 'Failed to submit job post.');
      throw new Error(data.message || 'Failed to submit job post.');
    }
  } catch (error) {
    toast.error(error.message || 'An error occurred.');
    throw error;
  }
}
import { toast } from 'react-toastify';
// Function to add review
export async function addReview(reviewData) {
  try {
    const response = await fetch(`${API_BASE_URL}/review/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    const data = await response.json();
    if (response.ok) {
      toast.success('Review submitted successfully!');
      return data;
    } else {
      toast.error(data.message || 'Failed to submit review.');
      throw new Error(data.message || 'Failed to submit review.');
    }
  } catch (error) {
    toast.error(error.message || 'An error occurred.');
    throw error;
  }
}
// API base URL
const API_BASE_URL = 'http://localhost:5000';

// Function to get all categories
export async function getAllCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/category/all`);
    const data = await response.json();
    if (response.ok) {
      return data.result || [];
    } else {
      toast.error(data.message || 'Failed to fetch categories.');
      return [];
    }
  } catch (error) {
    toast.error(error.message || 'An error occurred.');
    return [];
  }
}
// Function to add contact
export async function addContact({ name, email, message }) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/contactAdd`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();
    if (response.ok) {
      toast.success('Message sent successfully!');
      return data;
    } else {
      toast.error(data.message || 'Failed to send message.');
      throw new Error(data.message || 'Failed to send message.');
    }
  } catch (error) {
    toast.error(error.message || 'An error occurred.');
    throw error;
  }
}
