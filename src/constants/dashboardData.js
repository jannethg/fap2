import IconAnnouncmentBold from '@/components/icons/IconAnnouncmentBold.vue'
import IconTestimonialBold from '@/components/icons/IconTestimonialBold.vue'
import IconVerificationBold from '@/components/icons/IconVerificationBold.vue'
import IconMessagingBold from '@/components/icons/IconMessagingBold.vue'

export const cardData = [
  {
    id: 1,
    name: 'Announcements',
    description: 'You have 10 unread notifications ',
    href: '/',
    textLink: 'View News Feed',
    icon: IconAnnouncmentBold,
    count: 10
  },
  {
    id: 2,
    name: 'Messaging',
    description: 'You have 6 unread messages',
    href: '/',
    textLink: 'View Messages',
    icon: IconMessagingBold,
    count: 6
  },
  {
    id: 3,
    name: 'Verification Requests',
    description: 'You have 13 pending approvals',
    href: '/',
    textLink: 'View Users',
    icon: IconVerificationBold,
    count: 13
  },
  {
    id: 4,
    name: 'Testimonials',
    description: 'You have 4 pending comment approval',
    href: '/',
    textLink: 'View Testimonials',
    icon: IconTestimonialBold,
    count: 4
  },
]