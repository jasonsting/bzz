CREATE TABLE BillingCalendarStaff (
	WhenPosted date NULL,
	ReportDate date NULL,
	Department varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	EmployeeID int NULL,
	FirstName varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	LastName varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	LoginNumber int NULL,
	PayCode varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Minutes int NULL,
	Hours float NULL
);


CREATE TABLE BillingColor (
	ID int IDENTITY(1,1) NOT NULL,
	UserID nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[User] nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Color1 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Color2 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Color3 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Color4 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Color5 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Color6 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Category1 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Category2 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Category3 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Category4 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Category5 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Category6 nvarchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_BillingColor PRIMARY KEY (ID)
);


CREATE TABLE BillingDataCollection (
	IRB int NULL,
	ID int NULL
);


CREATE TABLE Billing_Coverage_Government_New (
	PrimaryCoverage varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Government tinyint NULL,
	[New] bit NULL,
	LastUpdated datetime NULL,
	ID int IDENTITY(1,1) NOT NULL,
	CONSTRAINT PK_Billing_Coverage_Government_New PRIMARY KEY (ID)
);


CREATE TABLE Billing_Data_Collection (
	IRB int NULL,
	ID int NULL
);


CREATE TABLE Billing_WQ5508 (
	[Svc Date] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Patient MRN] int NULL,
	Patient varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[CPT Codes] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Sess Amount] float NULL,
	[Primary Coverage] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Study Type] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Research IRB] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Days Until Timely Filing] int NULL,
	[Aging Days] int NULL,
	Notes varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Valid IRB Found in Provider Notes] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Gov Cov Flag] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Expedite Process] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Color varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	UploadDateTime datetime NOT NULL,
	ID int IDENTITY(1,1) NOT NULL,
	CONSTRAINT PK_YourTable PRIMARY KEY (ID)
);



CREATE TABLE CLARITY_CHG_REVIEW_WQ_HX (
	WORKQUEUE_ID int NULL,
	HX_DATE date NULL,
	TAB int NULL,
	CHG_SESS_CNT_EOD int NULL,
	CHG_SESS_CNT_ADDED int NULL,
	CHG_SESS_CNT_REMVD int NULL,
	CHG_SESS_AMT_EOD float NULL,
	CHG_SESS_AMT_ADDED float NULL,
	CHG_SESS_AMT_REMVD float NULL
);


CREATE TABLE WQ5508_CONSOLIDATED (
	id int IDENTITY(1,1) NOT NULL,
	Done bit NULL,
	Pending bit NULL,
	Notes nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Patient MRN] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Patient nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Svc Date] datetime NULL,
	[Research IRB] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Sess Amount] float NULL,
	[CPT Codes] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Study Type] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Primary Coverage] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Days Until Timely Filing] float NULL,
	[Aging Days] float NULL,
	[WQ File Date] datetime2(7) NULL,
	Username nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	GovernmentFlag bit NULL,
	DataCollectionFlag bit NULL,
	IRBFoundFlag bit NULL,
	ManagerFlag bit NULL,
	DateTimeStamp datetime2(7) NULL,
	CONSTRAINT PK__WQ5508 PRIMARY KEY (id)
);


