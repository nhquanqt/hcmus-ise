# API documentation

## Sign Up
```
POST /api/user/signup
```
Request structure:
```
{
    "UserTypeID": 123,
    "AccountEmail": "sampleemail@gmail.com",
    "Username": "wan2000",
    "Password": "123456",
    "LinkedAccount": 123
}
```
Response sample:
```
{
    "id": 1,
    "AccountEmail": "sampleemail@gmail.com",
    "Username": "wan2000",
    "Password": "123456",
    "LinkedAccount": 123,
    "updatedAt": "2021-01-05T08:42:18.545Z",
    "createdAt": "2021-01-05T08:42:18.545Z"
}
```

## Login
```
GET /api/user/login
```
Request sample:
```
{
    "Username": "wan2000",
    "Password": "123456"
}
```
Response sample:
```
[
    {
        "id": 1,
        "UserTypeID": null,
        "AccountEmail": "sampleemail@gmail.com",
        "Username": "wan2000",
        "Password": "123456",
        "LinkedAccount": "123",
        "createdAt": "2021-01-05T08:16:40.000Z",
        "updatedAt": "2021-01-05T08:16:40.000Z"
    }
]
```
or
```
[]
```

## Upload profile for seeker
```
POST /api/seeker/uploadProfile
```
Request sample:
```
{
    "UserID": 1,
    "FullName": "Hoang-Quan Nguyen",
    "DateOfBirth": "2000-01-26",
    "PhoneNumber": "0888888888",
    "Location": "Ho Chi Minh City",
    "CV": "123e4567-e89b-12d3-a456-426614174000"
}
```
Response sample:
```
{
    "id": 2,
    "UserID": 1,
    "FullName": "Hoang-Quan Nguyen",
    "DateOfBirth": "2000-01-26T00:00:00.000Z",
    "PhoneNumber": "0888888888",
    "Location": "Ho Chi Minh City",
    "CV": "123e4567-e89b-12d3-a456-426614174000",
    "updatedAt": "2021-01-05T08:45:42.580Z",
    "createdAt": "2021-01-05T08:45:42.580Z"
}
```

## Upload profile for company
```
POST /api/company/uploadProfile
```
Request sample:
```
{
    "UserID": 1,
    "FieldID": 1,
    "CompanyName": "WanWan Inc.",
    "Location": "Ho Chi Minh City",
    "CompanyEmail": "wan@gmail.com",
    "CompanyDescription": "A sample company"
}
```
Response sample:
```
{
    "id": 1,
    "UserID": 1,
    "CompanyName": "WanWan Inc.",
    "Location": "Ho Chi Minh City",
    "CompanyEmail": "wan@gmail.com",
    "CompanyDescription": "A sample company",
    "updatedAt": "2021-01-05T08:47:59.409Z",
    "createdAt": "2021-01-05T08:47:59.409Z"
}
```

## Post job
```
POST /api/company/postJob
```
Request sample:
```
{
    "CompanyID": 2,
    "RecruitmentDate": "2021-01-20",
    "ExpiredDate": "2021-02-20",
    "Description": "This is a sample recruitment",
    "Salary": 10000,
    "MajorID": 1,
    "JobName": "Back-end developer",
    "JobType": 1,
    "JobDescription": "This is a sample job"
}
```

## Get all jobs
```
GET /api/jobs/all
```
Response sample:
```
[
    {
        "id": "41831c50-4f33-11eb-87b0-4b06b0a79247",
        "RecruitmentID": "41803620-4f33-11eb-87b0-4b06b0a79247",
        "MajorID": null,
        "JobName": "React.js developer",
        "JobType": null,
        "JobDescription": "This is another sample job",
        "createdAt": "2021-01-05T08:51:52.000Z",
        "updatedAt": "2021-01-05T08:51:52.000Z"
    },
    {
        "id": "d5de8020-4f32-11eb-bcd1-27dd6677f467",
        "RecruitmentID": "d5dc5d40-4f32-11eb-bcd1-27dd6677f467",
        "MajorID": null,
        "JobName": "Back-end developer",
        "JobType": null,
        "JobDescription": "This is a sample job",
        "createdAt": "2021-01-05T08:48:52.000Z",
        "updatedAt": "2021-01-05T08:48:52.000Z"
    }
]
```

## Get a job by id
```
GET /api/jobs/id/:id
```
URL sample: 
```
http://localhost:8080/api/jobs/id/41831c50-4f33-11eb-87b0-4b06b0a79247
```
Response sample:
```
{
    "id": "41831c50-4f33-11eb-87b0-4b06b0a79247",
    "RecruitmentID": "41803620-4f33-11eb-87b0-4b06b0a79247",
    "MajorID": null,
    "JobName": "React.js developer",
    "JobType": null,
    "JobDescription": "This is another sample job",
    "createdAt": "2021-01-05T08:51:52.000Z",
    "updatedAt": "2021-01-05T08:51:52.000Z"
}
```

## Search jobs by filter (in dev)
```
GET /api/jobs/search
```
Request sample:
```
{
    "name": "back-end",
    "min": 100,
    "max": 20000
}
```
Response sample:
```
[
    {
        "id": "d5de8020-4f32-11eb-bcd1-27dd6677f467",
        "RecruitmentID": "d5dc5d40-4f32-11eb-bcd1-27dd6677f467",
        "MajorID": null,
        "JobName": "Back-end developer",
        "JobType": null,
        "JobDescription": "This is a sample job",
        "createdAt": "2021-01-05T08:48:52.000Z",
        "updatedAt": "2021-01-05T08:48:52.000Z",
        "recruitment": {
            "id": "d5dc5d40-4f32-11eb-bcd1-27dd6677f467",
            "CompanyID": 1,
            "RecruitmentDate": "2021-01-20T00:00:00.000Z",
            "ExpiredDate": "2021-02-20T00:00:00.000Z",
            "Description": "This is a sample recruitment",
            "Salary": 10000,
            "createdAt": "2021-01-05T08:48:51.000Z",
            "updatedAt": "2021-01-05T08:48:51.000Z"
        }
    }
]
```