import IconDashboard from "@/components/icons/IconDashboard.vue"
import IconMyPrograms from "@/components/icons/IconMyPrograms.vue"
import IconReports from "@/components/icons/IconReports.vue"
import IconSearchPrograms from "@/components/icons/IconSearchPrograms.vue"
import IconCalendar from "@/components/icons/IconCalendar.vue"
import IconTestimonial from "@/components/icons/IconTestimonial.vue"
import IconInbox from "@/components/icons/IconInbox.vue"
import IconMessages from "@/components/icons/IconMessages.vue"
import IconAnnouncment from "@/components/icons/IconAnnouncment.vue"

export const navigatios = [
  {
    name: 'Dashboard',
    href:'/',
    icon: IconDashboard,
    hasChevronDown: true
  },
  {
    name: 'My Announcements',
    href:'/announcements',
    icon: IconAnnouncment,
    hasChevronDown: true
  },
  {
    name: 'Search Programs',
    href:'/programs',
    icon: IconSearchPrograms,
    hasChevronDown: true
  },
  {
    name: 'My Programs',
    href:'/programs/my-programs',
    icon: IconMyPrograms,
    hasChevronDown: true
  },
  {
    name: 'Reports',
    href:'/reports',
    icon: IconReports,
    hasChevronDown: true
  },
  {
    name: 'Testimonials',
    href:'/testimonials',
    icon: IconTestimonial,
    hasChevronDown: true
  },
  {
    name: 'Messages',
    href:'/messages',
    icon: IconMessages,
    hasChevronDown: false
  },
  {
    name: 'Inbox',
    href:'/inbox',
    icon: IconInbox,
    hasChevronDown: false
  }, {
    name: 'Calendar',
    href:'/calendar',
    icon: IconCalendar,
    hasChevronDown: false
  },
]