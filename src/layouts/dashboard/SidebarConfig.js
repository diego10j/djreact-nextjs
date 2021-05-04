// routes
import { PATH_DASHBOARD } from "src/routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: 22, height: 22 }}
  />
);

const ICONS = {
  page: getIcon("ic_page"),
  dashboard: getIcon("ic_dashboard"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "general",
    items: [
      {
        title: "Page One",
        href: PATH_DASHBOARD.general.pageOne,
        icon: ICONS.page,
      },
      {
        title: "Page Two",
        href: PATH_DASHBOARD.general.pageTwo,
        icon: ICONS.page,
      },
      {
        title: "Page Three",
        href: PATH_DASHBOARD.general.pageThree,
        icon: ICONS.page,
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: "app",
    items: [
      {
        // FOUNDATIONS
        // ----------------------------------------------------------------------
        title: "Drop",
        href: "/dashboard/drop",
        icon: ICONS.dashboard,
        items: [
          {
            title: "Page Four",
            href: PATH_DASHBOARD.drop.pageFour,
          },
          {
            title: "Page Five",
            href: PATH_DASHBOARD.drop.pageFive,
          },
          {
            title: "Page Six",
            href: PATH_DASHBOARD.drop.pageSix,
          },
        ],
      },
    ],
  },
];

export default sidebarConfig;
