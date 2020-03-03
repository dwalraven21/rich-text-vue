<template>
  <div>
    <script v-html="jsonld" type="application/ld+json" />
    <h1>How do I add rich text to a Vue.js project?</h1>
    <p>To use rich text in a Vue.js sinlge page application, instead of adding the rich text script to the index.html page, you would add the json data to a Vue component. You can do this by returning a variable containing the json data. You can then add a script with type='application/ld+json' to your template section and use v-html='jsonld' to display the json object on the page.</p>
  </div>
</template>

<script>
export default {
  name: 'FAQs',
  data(){
        return {
            jsonld: {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How do I add rich text to a Vue.js project?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To use rich text in a Vue.js sinlge page application, instead of adding the rich text script to the index.html page, you would add the json data to a Vue component. You can do this by returning the variable jsonld with the json data. You can then add a script with type='application/ld+json' to your template section and use v-html='jsonld' to display the json object."
                        }
                    }
                ]
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0 auto;
  padding: 60px;
}

h1 {
  margin: 40px 0 0;
}
p {
  text-align: left;
}

</style>
