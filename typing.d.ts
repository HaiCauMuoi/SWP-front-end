interface ProjectCriteria {
  criteria1: string;
  criteria2: string;
  criteria3: string;
}

interface ProjectCategory {
  category1: string;
  category2: string;
  category3: string;
}

export interface Project {
  _id: string;
  Project_Id: string;
  Project_Name: string;
  Project_Location: string;
  Post_Date: string;
  Project_Skill: string;
  Project_Field: string;
  Project_Criteria: ProjectCriteria;
  User_University: string;
  End_Date: Date;
  User_Name: string;
  User_Email: string;
  Member_Amount: string;
  User_Id: string;
  User_Password: string;
  Project_Description: string;
  Project_Category: ProjectCategory;
}

export interface User { }

export interface Messgae { }

export interface MessageBox { }
