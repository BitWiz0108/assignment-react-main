import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import SquareIcon from "@mui/icons-material/Square";
import {
  ICardDetail,
  IEmployList,
  IEmployPayroll,
  ISchedule,
  IScheduleDetail,
  ITaskList,
} from "./type";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import dayjs from "dayjs";

const options: { label: string; value: string }[] = [
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

const cardDetail: ICardDetail[] = [
  { label: "Total Employee", value: 234, percent: 5, Icon: GroupIcon },
  { label: "New Employee", value: 42, percent: 5, Icon: GroupIcon },
  { label: "Resigned Employee", value: 12, percent: 2, Icon: GroupIcon },
  { label: "Job Applications", value: 367, percent: 10, Icon: WorkIcon },
];

const taskList: ITaskList = {
  header: ["Task", "", "Due", "Member", "Progress"],
  data: [
    {
      task: "Create branded",
      value: 3,
      due: new Date(),
      members: [
        { id: 1, name: "john", image: "https://picsum.photos/200/300" },
        {
          id: 2,
          name: "Deni",
          image: "http://dummy-images.com/abstract/dummy-375x500-Comb.jpg",
        },
        { id: 3, name: "john", image: "https://picsum.photos/200/300" },
      ],
      progress: 25,
    },
    {
      task: "Develop branded",
      value: 2,
      due: new Date(),
      members: [
        {
          id: 1,
          name: "john",
          image: "http://dummy-images.com/abstract/dummy-315x560-Stones.jpg",
        },
        { id: 2, name: "Deni", image: "https://picsum.photos/200/300" },
        {
          id: 3,
          name: "john",
          image: "http://dummy-images.com/abstract/dummy-375x500-Comb.jpg",
        },
      ],
      progress: 25,
    },
    {
      task: "Refine UI/UX",
      value: 6,
      due: new Date(),
      members: [
        {
          id: 1,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_640.png",
        },
        {
          id: 2,
          name: "Deni",
          image:
            "https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_640.png",
        },
        {
          id: 3,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_640.png",
        },
      ],
      progress: 10,
    },
    {
      task: "Collaborate on website",
      value: 6,
      due: new Date(),
      members: [
        {
          id: 1,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png",
        },
        {
          id: 2,
          name: "Deni",
          image:
            "https://cdn.pixabay.com/photo/2013/07/13/10/14/man-156837_640.png",
        },
        {
          id: 3,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png",
        },
      ],
      progress: 100,
    },
    {
      task: "Develop social media",
      value: 2,
      due: new Date(),
      members: [
        {
          id: 1,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_640.png",
        },
        {
          id: 2,
          name: "Deni",
          image:
            "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_640.png",
        },
        {
          id: 3,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_640.png",
        },
      ],
      progress: 100,
    },

    {
      task: "Create branded",
      value: 3,
      due: new Date(),
      members: [
        {
          id: 1,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
        },
        {
          id: 2,
          name: "Deni",
          image:
            "https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_640.png",
        },
        {
          id: 3,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2018/09/15/19/23/avatar-3680134_640.png",
        },
      ],
      progress: 100,
    },
    {
      task: "Create branded",
      value: 3,
      due: new Date(),
      members: [
        {
          id: 1,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
        },
        {
          id: 2,
          name: "Deni",
          image:
            "https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_640.png",
        },
        {
          id: 3,
          name: "john",
          image:
            "https://cdn.pixabay.com/photo/2018/09/15/19/23/avatar-3680134_640.png",
        },
      ],
      progress: 100,
    },
  ],
};

const employList: IEmployList = {
  header: ["Employ Name", "Employment Id", "Email", "Role", "Status"],
  data: [
    {
      name: "Darvel steward",
      image:
        "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_640.png",
      id: "#E234",
      email: "darvel@gmail.com",
      role: "Sr.Project Manager",
      status: "Active",
    },
    {
      name: "Wade warrnen",
      image:
        "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_640.png",
      id: "#E235",
      email: "warrnen@gmail.com",
      role: "Jr.Developer",
      status: "Active",
    },
    {
      name: "Jhon Belli",
      image:
        "https://cdn.pixabay.com/photo/2018/09/15/19/23/avatar-3680134_640.png",
      id: "#E236",
      email: "delli@gmail.com",
      role: "Sr.Human Resources",
      status: "Active",
    },
    {
      name: "Marvin Mckinny",
      image: "",
      id: "#E237",
      email: "kinny@gmail.com",
      role: "Sr.Developer",
      status: "Active",
    },
    {
      name: "Brooklym simmouns",
      image: "",
      id: "#E238",
      email: "simmouns@gmail.com",
      role: "Sr.Project Manager",
      status: "Active",
    },
  ],
};

const employPayroll: IEmployPayroll[] = [
  {
    label: "Total Payrolls",
    value: 268,
    Icon: SquareIcon,
  },
  {
    label: "Draft",
    value: 13,
    Icon: WorkIcon,
  },
  {
    label: "OverDue",
    value: 7,
    Icon: ShoppingBagIcon,
  },
  {
    label: "Failed",
    value: 5,
    Icon: FolderDeleteIcon,
  },
  {
    label: "Schedule",
    value: 24,
    Icon: EditCalendarIcon,
  },
  {
    label: "Paid",
    value: 312,
    Icon: AssignmentTurnedInIcon,
  },
];

const getWeekDays = () => {
  const today = dayjs();
  const startOfWeek = today.startOf("week");
  const weekdays = [1, 2, 3, 4, 5].map((i) => {
    const day = startOfWeek.add(i, "day");
    return {
      name: day.format("ddd DD"),
      id: i,
    };
  });

  return weekdays;
};
const emptySlot: IScheduleDetail = { label: null, status: null };
export const scheduleList: ISchedule = {
  header: [{ id: 0, name: "Time" }, ...getWeekDays()],
  data: [
    {
      time: "9 AM",
      detail: [
        emptySlot,
        emptySlot,
        {
          label: "Interview with john",
          status: "blue",
        },
        emptySlot,
        emptySlot,
      ],
    },
    {
      time: "10 AM",
      detail: [
        {
          label: "Onboarding session",
          status: "orange",
        },
        emptySlot,
        emptySlot,
        {
          label: "Interview with david",
          status: "blue",
        },
        emptySlot,
      ],
    },
    {
      time: "11 AM",
      detail: [
        emptySlot,
        {
          label: "Monthly Performance",
          status: "darkGreen",
        },
        emptySlot,
        emptySlot,
        {
          label: "Project Kickoff",
          status: "green",
        },
      ],
    },
    {
      time: "12 AM",
      detail: [
        {
          label: "Lunch Break",
          status: "pink",
        },
        emptySlot,
        {
          label: "Lunch Break",
          status: "pink",
        },
        emptySlot,
        {
          label: "Lunch Break",
          status: "pink",
        },
      ],
    },
    {
      time: "1 AM",
      detail: [
        emptySlot,
        {
          label: "Lunch Break",
          status: "pink",
        },
        emptySlot,
        {
          label: "Lunch Break",
          status: "pink",
        },
        emptySlot,
      ],
    },
    {
      time: "2 AM",
      detail: [
        {
          label: "Town hall meeting",
          status: "lightGreen",
        },
        emptySlot,
        emptySlot,
        emptySlot,
        emptySlot,
      ],
    },
    {
      time: "3 AM",
      detail: [
        emptySlot,
        emptySlot,
        {
          label: "Benefits",
          status: "lightGreen",
        },
        emptySlot,
        {
          label: "Performance",
          status: "green",
        },
      ],
    },
    {
      time: "4 AM",
      detail: [
        emptySlot,
        {
          label: "Recruitment ",
          status: "red",
        },
        emptySlot,
        emptySlot,
        emptySlot,
      ],
    },
    {
      time: "5 AM",
      detail: [
        emptySlot,
        emptySlot,
        emptySlot,
        {
          label: "Department",
          status: "darkGreen",
        },
        emptySlot,
      ],
    },
  ],
};
export { options, cardDetail, taskList, employList, employPayroll };
