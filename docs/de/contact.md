# Kontakt

Bei Fragen, Kommentaren oder Anliegen kontaktieren Sie uns bitte unter [studyathome@technikum-wien.at](mailto:studyathome@technikum-wien.at).

Informationen über den Herausgeber und die redaktionelle Verantwortung finden Sie im [Impressum](./legal-notice).

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