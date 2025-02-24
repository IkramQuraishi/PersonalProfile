import { Injectable } from '@angular/core';
import { IPersonalInfo } from '../model/IPersonalInfo';
import { IBasicInfo } from '../model/IBasicInfo';
import { ISkill } from '../model/ISkill';
import { IPortfolioItem } from '../model/IPortfolioItem';
import { IExperience } from '../model/IExperience';
import { IReference } from '../model/IReference';
import { ISocialIcon } from '../model/ISocialIcon';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private personalInfo: IPersonalInfo = {
    name: 'Ikramullah Quraishi',
    profileImage: '/assets/pics/Photo_profile_site.jpg',
    bgImage: '/assets/pics/bg.jpg',
    titles: ['Full Stack .Net Developer', 'AI Developer', 'Father']
  };

  private basicInfo: IBasicInfo = {
    bio: 'Hello, I am Ikramullah Quraishi, a seasoned IT professional with over 15 years of experience in software development, focusing on modern technologies such as .Net, C#, Angular, SQL Server, and Power Platform. I specialize in delivering information and data management solutions for international organizations like the United Nations and the World Bank.',
    age: 40, 
    email: 'ikram.mis@gmail.com', 
    phone: '+1 (289) 783-8036', 
    address: 'Mississauga, ON, Canada', 
    languages: ['English', 'Pashto', 'Persian', 'Hindi', 'Urdu']
  };

  private skills: ISkill[] = [
    { name: '.NET Framework', percentage: 90 }, 
    { name: 'Angular', percentage: 85 }, 
    { name: 'SQL Server', percentage: 85 }, 
    { name: 'SharePoint', percentage: 80 },    
    { name: 'Power Platform', percentage: 85 },       
    { name: 'DevOps', percentage: 70 }, 
    { name: 'UI/UX', percentage: 65 }, 
    { name: 'Azure', percentage: 70 }
   
  ];

  private portfolioItems: IPortfolioItem[] = [
    { imageUrl: '/assets/projects/project1.jpg', caption: 'Sample Project 1 ' },
    { imageUrl: '/assets/projects/project2.jpg', caption: 'Sample Project 2' },
    { imageUrl: '/assets/projects/project3.jpg', caption: 'Sample Project 3' },
    { imageUrl: '/assets/projects/project4.jpg', caption: 'Sample Project 4' }
  ];

  private experiences: IExperience[] = [
    {
      title: 'Sr. Cloud Consultant',
      company: 'Creospark Consulting, Canada',
      duration: 'Jan 2023 – Jul 2023',
      description: 'Designed, developed, and deployed business applications using Microsoft Power Platform, including PowerApps, Power Automate, and Power BI. Analyzed client needs, collaborated with project teams, estimated work, and integrated Power Platform with on-premises and SaaS applications. Earned Microsoft Certifications and pursued professional development.'
    },
    {
      title: 'Data Management Officer',
      company: 'United Nations Office for Coordinating Humanitarian Affairs (UNOCHA)',
      duration: 'May 2021 – Dec 2022',
      description: 'Developed Afghanistan Humanitarian Fund (AHF) BI App using Power BI, integrated it with the grant management system using APIs and on-premises gateway. Established AHF Contact Management App using Power Apps and SharePoint, developed AHF Allocation Portal for external partners using Power Pages and .Net, and created humanitarian profiles and dashboards.'
    },
    {
      title: 'Director, Statistics and Information Systems',
      company: 'Ministry of Rural Rehabilitation and Development',
      duration: 'Apr 2020 – Apr 2021',
      description: 'Led the development and implementation of the Enterprise Project Information System at the ministry level. Initiated a 3-year strategy for digitalizing the ministry, developed data visualization tools using Power BI and Arc GIS, and implemented Office 365 with SharePoint and Power Platform.'
    },
    {
      title: 'Information Management Officer',
      company: 'International Organization for Migration (IOM)',
      duration: 'Nov 2017 – Apr 2020',
      description: 'Supervised 11 information management staff, designed and implemented information management systems and reporting tools using Office 365. Maintained SharePoint portal, developed Migrant Data Portal using Power Platform, and engineered .NET applications with SQL Server for data management and visualization.'
    },
    {
      title: 'Data Analyst',
      company: 'UN Women',
      duration: 'Jan 2015 – Nov 2017',
      description: 'Developed data management tools and conducted data analysis using Power BI and advanced visualization tools. Established a comprehensive knowledge management system and operationalized a gender knowledge and information hub, including a gender statistics data warehouse for Central Statistics Organization.'
    },
    {
      title: 'Manager, Information Systems',
      company: 'World Bank Group',
      duration: 'Mar 2011 – Dec 2014',
      description: 'Performed needs assessment and analysis for Afghanistan Rural Enterprise Development Program (AREDP) MIS. Developed and integrated M&E-MIS using C# ASP.Net MVC, linking provinces to HQ, prepared training materials, and designed web pages and websites using ASP.NET with backend databases.'
    },
    {
      title: 'Senior Database Developer',
      company: 'United Nations Development Program (UNDP)',
      duration: 'Sep 2006 – Mar 2011',
      description: 'Developed, configured, maintained, and troubleshot databases for the organization, ensuring robust data management and system reliability.'
    }
  ];

  private education: IExperience[] = [
    {
      title: 'Master’s Degree – Information Technology',
      company: 'Virtual University of Pakistan, Lahore, Pakistan',
      duration: 'May 2015',
      description: 'Completed a Master’s Degree in Information Technology, focusing on advanced software development and data management techniques.'
    },
    {
      title: 'Master’s Degree – Information Technology',
      company: 'University of Peshawar, Peshawar, Pakistan',
      duration: 'May 2007',
      description: 'Completed a Master’s Degree in Information Technology, building foundational knowledge in software development and database management.'
    }
  ];

  private references: IReference[] = [
    {
      name: 'John Doe',
      title: 'Senior Manager at UNOCHA',
      imageUrl: 'https://media.istockphoto.com/id/1134016793/photo/shes-a-confident-face-for-her-company.jpg?s=2048x2048&w=is&k=20&c=vz1PmX0crfnMF6WwSZHnF9VildcwOKl40A2MCwesgSc=',
      description: 'Worked closely with Ikramullah Quraishi during his tenure as Data Management Officer at UNOCHA, highly recommending his expertise in Power BI and data management solutions.'
    },
    {
      name: 'Jane Smith',
      title: 'IT Director at World Bank Group',
      imageUrl: 'https://media.istockphoto.com/id/1349963589/photo/happy-redhead-woman-talking-while-having-a-video-call.jpg?s=2048x2048&w=is&k=20&c=J35ynt0Mo_lRmAZ3peK2H4ks7qHzcIl12ekMC_bNuwE=',
      description: 'Collaborated with Ikramullah Quraishi on the AREDP MIS project, praising his leadership and technical skills in .Net and database integration.'
    }
  ];

  private socialIcons: ISocialIcon[] = [
    { name: 'Facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook-f' },
    { name: 'Twitter', url: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { name: 'Google+', url: 'https://www.linkedin.com/in/ikramquraishi', iconClass: 'fab fa-linkedin' },
    { name: 'Instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' }
  ];
  getPersonalInfo(): IPersonalInfo {
    return this.personalInfo;
  }

  getBasicInfo(): IBasicInfo {
    return this.basicInfo;
  }

  getSkills(): ISkill[] {
    return this.skills;
  }

  getPortfolioItems(): IPortfolioItem[] {
    return this.portfolioItems;
  }

  getWorkExperiences(): IExperience[] {
    return this.experiences;
  }

  getEducation(): IExperience[] {
    return this.education;
  }

  getReferences(): IReference[] {
    return this.references;
  }

  getSocialIcons(): ISocialIcon[] {
    return this.socialIcons;
  }
}