import {MainUrl, ProfileUrl} from "@members/config/url.config";

export interface NavLinks {
  title: string;
  link: string;
}

export const mainNavLinks: NavLinks[] = [
  {title: "Home", link: MainUrl.home},
  {title: "Games", link: MainUrl.games},
  {title: "ESports", link: MainUrl.esports},
]

export interface GroupNavLinks {
  name: string;
  description: string;
  code: MainNavCode;
  links: NavLinks[]
}

export type MainNavCode = "profile" | "earnings" | "play" | "help" | "affiliate";

export const userDropdownLinks: GroupNavLinks[] = [
  {
    name: "Profile & Account",
    description: "Change your avatar &amp; cover, accept friends, read messages and more!",
    code: "profile",
    links: [
      {title: "Profile Info", link: ProfileUrl.profile},
      {title: "Social Links", link: MainUrl.home},
      {title: "Change Password", link: MainUrl.home},
      {title: "Bank Info", link: MainUrl.home},
      {title: "Friends", link: MainUrl.home},
    ]
  },
  {
    name: "Finance",
    description: "Change settings, configure notifications, and review your privacy.",
    code: "earnings",
    links: [
      {title: "Deposit", link: MainUrl.home},
      {title: "Withdraw", link: MainUrl.home},
      {title: "Transactions", link: MainUrl.home},
    ]
  },
  {
    name: "Games",
    code: "play",
    description: "Select A Game And Play! And Matched Against A Real Player And Play Your Console.",
    links: [
      {title: "Played Esports Games", link: MainUrl.home},
      {title: "Played Games", link: MainUrl.home},
    ]
  },
  {
    name: "Help",
    code: "help",
    description: "Create new groups, manage the ones you created or accept invites!",
    links: [
      {title: "Support", link: MainUrl.home},
    ]
  },
  {
    name: "Affiliate System",
    code: "affiliate",
    description: "Review your account, manage products check stats and much more!",
    links: [
      {title: "My Affiliates", link: MainUrl.home},
      {title: "Banners", link: MainUrl.home},
    ]
  },
];
