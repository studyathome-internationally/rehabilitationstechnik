# Contact

In case of any question, comment or concern, please contact us at [studyathome@technikum-wien.at](mailto:studyathome@technikum-wien.at).

For information about publisher and editorial responsibility, please read the [legal notice](./legal-notice).

## Team

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: 'https://www.github.com/wzagler.png',
    name: 'Wolfgang Zagler',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/wzagler' },
    ]
  },
  {
    avatar: 'https://www.github.com/deinhofer.png',
    name: 'Martin Deinhofer',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/deinhofer' },
    ]
  },
  {
    avatar: 'https://www.github.com/sabicalija.png',
    name: 'Alija Sabic',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/sabicalija' },
      { icon: 'twitter', link: 'https://twitter.com/G_qed' }
    ]
  }
]
</script>
<VPTeamMembers size="small" :members="members" />

<style lang="stylus">
.prev-next
  display none !important
</style>