import { prisma } from "../src/lib/prisma.js";
import { EmployeeStatus } from "../generated/prisma/enums.js";

const departments = [
  "Development",
  "Marketing",
  "Sales",
  "Human Resources",
];

const employees = [
  {
    firstName: "Marko",
    lastName: "Markovic",
    email: "marko.markovic@example.com",
    phoneNumber: "+38970123456",
    position: "Backend Developer",
    startDate: new Date("2024-03-11"),
    salary: "2200.00",
    status: EmployeeStatus.Active,
    department: "Development",
  },
  {
    firstName: "Jovan",
    lastName: "Jovanovic",
    email: "jovan.jovanovic@example.com",
    phoneNumber: "+38970234567",
    position: "Frontend Developer",
    startDate: new Date("2023-09-18"),
    salary: "2100.00",
    status: EmployeeStatus.Active,
    department: "Development",
  },
  {
    firstName: "Ana",
    lastName: "Nikolic",
    email: "ana.nikolic@example.com",
    phoneNumber: "+38970345678",
    position: "QA Engineer",
    startDate: new Date("2025-01-13"),
    salary: "1800.00",
    status: EmployeeStatus.Active,
    department: "Development",
  },
  {
    firstName: "David",
    lastName: "Petrov",
    email: "david.petrov@example.com",
    phoneNumber: "+38970456789",
    position: "Full-Stack Developer",
    startDate: new Date("2022-06-20"),
    salary: "2500.00",
    status: EmployeeStatus.Active,
    department: "Development",
  },
  {
    firstName: "Elena",
    lastName: "Stojanovska",
    email: "elena.stojanovska@example.com",
    phoneNumber: "+38970567890",
    position: "UI/UX Designer",
    startDate: new Date("2024-11-04"),
    salary: "1700.00",
    status: EmployeeStatus.Inactive,
    department: "Development",
  },

  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phoneNumber: "+38970678901",
    position: "Marketing Specialist",
    startDate: new Date("2023-04-17"),
    salary: "1600.00",
    status: EmployeeStatus.Active,
    department: "Marketing",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    phoneNumber: "+38970789012",
    position: "Content Manager",
    startDate: new Date("2024-02-12"),
    salary: "1750.00",
    status: EmployeeStatus.Active,
    department: "Marketing",
  },
  {
    firstName: "Daniel",
    lastName: "Wilson",
    email: "daniel.wilson@example.com",
    phoneNumber: "+38970890123",
    position: "SEO Specialist",
    startDate: new Date("2025-03-03"),
    salary: "1650.00",
    status: EmployeeStatus.Active,
    department: "Marketing",
  },
  {
    firstName: "Sophia",
    lastName: "Taylor",
    email: "sophia.taylor@example.com",
    phoneNumber: "+38970901234",
    position: "Marketing Manager",
    startDate: new Date("2021-08-23"),
    salary: "2300.00",
    status: EmployeeStatus.Active,
    department: "Marketing",
  },

  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    phoneNumber: "+38970111222",
    position: "Sales Manager",
    startDate: new Date("2022-01-10"),
    salary: "2400.00",
    status: EmployeeStatus.Active,
    department: "Sales",
  },
  {
    firstName: "James",
    lastName: "Anderson",
    email: "james.anderson@example.com",
    phoneNumber: "+38970222333",
    position: "Sales Representative",
    startDate: new Date("2024-07-15"),
    salary: "1500.00",
    status: EmployeeStatus.Active,
    department: "Sales",
  },
  {
    firstName: "Olivia",
    lastName: "Thomas",
    email: "olivia.thomas@example.com",
    phoneNumber: "+38970333444",
    position: "Account Executive",
    startDate: new Date("2023-10-09"),
    salary: "1900.00",
    status: EmployeeStatus.Inactive,
    department: "Sales",
  },

  {
    firstName: "Robert",
    lastName: "Miller",
    email: "robert.miller@example.com",
    phoneNumber: "+38970444555",
    position: "HR Manager",
    startDate: new Date("2021-05-24"),
    salary: "2300.00",
    status: EmployeeStatus.Active,
    department: "Human Resources",
  },
  {
    firstName: "Jessica",
    lastName: "Moore",
    email: "jessica.moore@example.com",
    phoneNumber: "+38970555666",
    position: "HR Specialist",
    startDate: new Date("2024-06-03"),
    salary: "1700.00",
    status: EmployeeStatus.Active,
    department: "Human Resources",
  },
  {
    firstName: "William",
    lastName: "Martin",
    email: "william.martin@example.com",
    phoneNumber: "+38970666777",
    position: "Recruiter",
    startDate: new Date("2025-02-17"),
    salary: "1600.00",
    status: EmployeeStatus.Inactive,
    department: "Human Resources",
  },
];

async function main() {
  for (const departmentName of departments) {
    await prisma.department.upsert({
      where: {
        name: departmentName,
      },
      update: {},
      create: {
        name: departmentName,
      },
    });
  }

  for (const employee of employees) {
    await prisma.employee.upsert({
      where: {
        email: employee.email,
      },
      update: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        phoneNumber: employee.phoneNumber,
        position: employee.position,
        startDate: employee.startDate,
        salary: employee.salary,
        status: employee.status,
        department: {
          connect: {
            name: employee.department,
          },
        },
      },
      create: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        position: employee.position,
        startDate: employee.startDate,
        salary: employee.salary,
        status: employee.status,
        department: {
          connect: {
            name: employee.department,
          },
        },
      },
    });
  }

  console.log("Database seed completed successfully.");
}

main()
  .catch((error) => {
    console.error("Database seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });