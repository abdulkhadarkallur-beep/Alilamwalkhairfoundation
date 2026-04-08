// Configuration and Data Management
const CONFIG = {
  STORAGE_KEY: 'alIlamKhairConfig',
  
  DEFAULT_DATA: {
    cases: [
      {
        id: 1,
        name: 'Fatima Ahmed',
        category: 'Medical',
        description: 'Fatima is a 12-year-old girl who needs urgent heart surgery. Her family cannot afford the treatment. Your donation can save her life.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
        amountNeeded: 50000,
        amountRaised: 25000,
        urgency: 'High'
      },
      {
        id: 2,
        name: 'Ali Hassan Family',
        category: 'Homeless Support',
        description: 'The Hassan family lost their home in a fire. They are living on the streets with 3 children. We need funds for shelter, food, and basic necessities.',
        image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop',
        amountNeeded: 30000,
        amountRaised: 8000,
        urgency: 'Critical'
      },
      {
        id: 3,
        name: 'Madrasah Al-Noor',
        category: 'Education',
        description: 'A small madrasah needs help to provide quality Islamic and secular education to 200 underprivileged children. Help us build their library and provide scholarships.',
        image: 'https://images.unsplash.com/photo-1427504494785-cdcd02d457a0?w=400&h=300&fit=crop',
        amountNeeded: 80000,
        amountRaised: 35000,
        urgency: 'Medium'
      }
    ],
    organization: {
      name: 'Al-Ilam Wal Khair',
      email: 'donate@alifoundation.org',
      phone: '+1 (XXX) XXX-XXXX',
      address: '[Your Address]'
    },
    jobOpenings: [
      {
        id: 1,
        title: 'Program Manager',
        location: 'Full-time',
        department: 'Operations',
        description: 'Lead educational and social programs, manage team members, and ensure program effectiveness.',
        requirements: 'Bachelor\'s degree, 3+ years experience in program management',
        salary: 'Competitive'
      },
      {
        id: 2,
        title: 'Community Coordinator',
        location: 'Full-time',
        department: 'Community Outreach',
        description: 'Coordinate community outreach activities, organize events, and build relationships with local communities.',
        requirements: 'Strong communication skills, experience in community work',
        salary: 'Based on experience'
      },
      {
        id: 3,
        title: 'Healthcare Volunteer',
        location: 'Part-time',
        department: 'Healthcare',
        description: 'Assist in medical camps, health programs, and patient support services.',
        requirements: 'Medical/nursing background preferred',
        salary: 'Volunteer position'
      }
    ],
    learningPrograms: [
      {
        id: 1,
        title: 'Islamic Education',
        category: 'Religious Studies',
        description: 'Comprehensive Quranic studies, Arabic language, and Islamic knowledge for all ages.',
        duration: '6 months',
        schedule: 'Weekend classes',
        eligibility: 'Open to all',
        fee: 'Free'
      },
      {
        id: 2,
        title: 'Vocational Training',
        category: 'Skills Development',
        description: 'Practical skills training in tailoring, carpentry, computer basics, and more for employment readiness.',
        duration: '3-6 months',
        schedule: 'Weekdays',
        eligibility: 'Youth & Adults',
        fee: 'Subsidized'
      },
      {
        id: 3,
        title: 'Community Workshops',
        category: 'Health & Wellness',
        description: 'Health awareness, nutrition, hygiene, and life skills training for community members.',
        duration: 'Monthly sessions',
        schedule: 'Flexible',
        eligibility: 'Community members',
        fee: 'Free'
      }
    ],
    pages: {
      home: {
        heroTitle: 'Al-Ilam Wal Khair Foundation',
        heroSubtitle: 'Spreading Knowledge and Goodness, One Life at a Time',
        heroDescription: 'We are a nonprofit organization dedicated to providing education, healthcare, and hope to underprivileged communities. Join us in making a difference.',
        aboutTitle: 'About Our Foundation',
        aboutDescription: 'Our mission is to empower communities through education, healthcare, and financial assistance.'
      },
      about: {
        title: 'About Al-Ilam Wal Khair Foundation',
        description: 'Founded with a vision to serve humanity, our foundation focuses on education, healthcare, and community development.',
        mission: 'To spread knowledge and goodness, empowering individuals and communities to achieve their potential.',
        vision: 'A world where every person has access to quality education, healthcare, and basic necessities.',
        values: 'Compassion, Integrity, Transparency, and Excellence'
      },
      services: {
        title: 'Our Services',
        description: 'We provide comprehensive support to communities in need.',
        services: [
          { title: 'Healthcare Services', description: 'Free medical camps and treatment for underprivileged' },
          { title: 'Educational Support', description: 'Scholarships and educational programs for children' },
          { title: 'Emergency Relief', description: 'Immediate assistance during natural disasters and emergencies' }
        ]
      },
      learning: {
        title: 'Learning & Development',
        description: 'We offer various educational programs and training.',
        programs: [
          { title: 'Islamic Education', description: 'Quranic studies and Islamic knowledge' },
          { title: 'Vocational Training', description: 'Skills development for employment' },
          { title: 'Community Workshops', description: 'Health awareness and life skills training' }
        ]
      },
      jobs: {
        title: 'Job Opportunities',
        description: 'Join our team and make a difference.',
        openings: [
          { title: 'Program Manager', location: 'Full-time', description: 'Lead educational and social programs' },
          { title: 'Community Coordinator', location: 'Full-time', description: 'Coordinate community outreach activities' },
          { title: 'Healthcare Volunteer', location: 'Part-time', description: 'Assist in medical camps and health programs' }
        ]
      },
      donations: {
        title: 'Make a Donation',
        description: 'Your generous donation directly helps those in need.',
        bankInfo: 'Bank Transfer: [Your Bank Details]',
        onlineInfo: 'Online Donation: Available through multiple payment gateways',
        qrImage: 'phonepe-qr.png',
        donationPhone: '8792050025'
      }
    }
  },

  // Get data from localStorage or return default
  getData: function() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : this.DEFAULT_DATA;
  },

  // Save data to localStorage
  saveData: function(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Get cases
  getCases: function() {
    return this.getData().cases;
  },

  // Add new case
  addCase: function(newCase) {
    const data = this.getData();
    const now = Date.now();
    newCase.id = now;
    newCase.createdAt = newCase.createdAt || now;
    data.cases.push(newCase);
    this.saveData(data);
    return newCase;
  },

  // Update case
  updateCase: function(caseId, updatedCase) {
    const data = this.getData();
    const index = data.cases.findIndex(c => c.id == caseId);
    if (index !== -1) {
      data.cases[index] = { ...data.cases[index], ...updatedCase };
      this.saveData(data);
    }
  },

  // Delete case
  deleteCase: function(caseId) {
    const data = this.getData();
    data.cases = data.cases.filter(c => c.id != caseId);
    this.saveData(data);
  },

  // Get campaign data
  getCampaign: function() {
    return this.getData().campaign;
  },

  // Update campaign
  updateCampaign: function(newCampaign) {
    const data = this.getData();
    data.campaign = newCampaign;
    this.saveData(data);
  },

  // Get organization data
  getOrganization: function() {
    return this.getData().organization;
  },

  // Update organization
  updateOrganization: function(newOrganization) {
    const data = this.getData();
    data.organization = newOrganization;
    this.saveData(data);
  },

  // Get page data
  getPage: function(pageName) {
    const data = this.getData();
    return data.pages && data.pages[pageName] ? data.pages[pageName] : this.DEFAULT_DATA.pages[pageName];
  },

  // Update page data
  updatePage: function(pageName, pageContent) {
    const data = this.getData();
    if (!data.pages) data.pages = {};
    data.pages[pageName] = pageContent;
    this.saveData(data);
  },

  // Get job openings
  getJobOpenings: function() {
    const data = this.getData();
    return data.jobOpenings || this.DEFAULT_DATA.jobOpenings;
  },

  // Add new job opening
  addJobOpening: function(newJob) {
    const data = this.getData();
    if (!data.jobOpenings) data.jobOpenings = [];
    const now = Date.now();
    newJob.id = now;
    newJob.createdAt = newJob.createdAt || now;
    data.jobOpenings.push(newJob);
    this.saveData(data);
    return newJob;
  },

  // Update job opening
  updateJobOpening: function(jobId, updatedJob) {
    const data = this.getData();
    if (!data.jobOpenings) data.jobOpenings = [];
    const index = data.jobOpenings.findIndex(j => j.id == jobId);
    if (index !== -1) {
      data.jobOpenings[index] = { ...data.jobOpenings[index], ...updatedJob };
      this.saveData(data);
    }
  },

  // Delete job opening
  deleteJobOpening: function(jobId) {
    const data = this.getData();
    if (!data.jobOpenings) data.jobOpenings = [];
    data.jobOpenings = data.jobOpenings.filter(j => j.id != jobId);
    this.saveData(data);
  },

  // Get learning programs
  getLearningPrograms: function() {
    const data = this.getData();
    return data.learningPrograms || this.DEFAULT_DATA.learningPrograms;
  },

  // Get latest item from a list
  getLatestItem: function(list) {
    if (!list || list.length === 0) return null;
    return [...list].sort((a, b) => {
      const aTime = a.createdAt || a.id || 0;
      const bTime = b.createdAt || b.id || 0;
      return bTime - aTime;
    })[0];
  },

  // Get latest case
  getLatestCase: function() {
    return this.getLatestItem(this.getCases());
  },

  // Get latest job opening
  getLatestJobOpening: function() {
    return this.getLatestItem(this.getJobOpenings());
  },

  // Get latest learning program
  getLatestLearningProgram: function() {
    return this.getLatestItem(this.getLearningPrograms());
  },

  // Add new learning program
  addLearningProgram: function(newProgram) {
    const data = this.getData();
    if (!data.learningPrograms) data.learningPrograms = [];
    const now = Date.now();
    newProgram.id = now;
    newProgram.createdAt = newProgram.createdAt || now;
    data.learningPrograms.push(newProgram);
    this.saveData(data);
    return newProgram;
  },

  // Update learning program
  updateLearningProgram: function(programId, updatedProgram) {
    const data = this.getData();
    if (!data.learningPrograms) data.learningPrograms = [];
    const index = data.learningPrograms.findIndex(p => p.id == programId);
    if (index !== -1) {
      data.learningPrograms[index] = { ...data.learningPrograms[index], ...updatedProgram };
      this.saveData(data);
    }
  },

  // Delete learning program
  deleteLearningProgram: function(programId) {
    const data = this.getData();
    if (!data.learningPrograms) data.learningPrograms = [];
    data.learningPrograms = data.learningPrograms.filter(p => p.id != programId);
    this.saveData(data);
  },

  // Get job applications
  getJobApplications: function() {
    const data = this.getData();
    return data.jobApplications || [];
  },

  // Add new job application
  addJobApplication: function(application) {
    const data = this.getData();
    if (!data.jobApplications) data.jobApplications = [];
    application.id = Date.now();
    application.status = 'Pending'; // Pending, Reviewed, Shortlisted, Rejected
    data.jobApplications.push(application);
    this.saveData(data);
    return application;
  },

  // Update job application status
  updateJobApplicationStatus: function(applicationId, status) {
    const data = this.getData();
    if (!data.jobApplications) data.jobApplications = [];
    const index = data.jobApplications.findIndex(a => a.id == applicationId);
    if (index !== -1) {
      data.jobApplications[index].status = status;
      this.saveData(data);
    }
  },

  // Delete job application
  deleteJobApplication: function(applicationId) {
    const data = this.getData();
    if (!data.jobApplications) data.jobApplications = [];
    data.jobApplications = data.jobApplications.filter(a => a.id != applicationId);
    this.saveData(data);
  },

  // Reset to default
  resetData: function() {
    this.saveData(this.DEFAULT_DATA);
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
