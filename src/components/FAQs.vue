<template>
    <main>
        <script v-html="jsonld" type="application/ld+json" />
        <h1>How do I add rich text to a Vue.js project?</h1>
        <a href="https://github.com/dwalraven21/rich-text-vue/blob/master/src/components/FAQs.vue">
            <div class="github">
                <div>
                  <p>See source code on GitHub</p>
                </div>
                <div>
                  <img src="@/assets/GitHub-Mark-64px.png" style="width: 64px;" alt="See Source Code on GitHub"/>
                </div>
            </div>


        </a>
        <p>To use rich text in a Vue.js sinlge page application, instead of adding the rich text script to the <code>index.html</code> page, you would add the json data to a Vue component. You can do this by returning a variable containing the json data. You can then add a script with <code>type='application/ld+json'</code> to your template section and use <code>v-html</code> to display the json object on the page.</p>
        <p>Test your page here to make sure it supports rich results: <a href="https://search.google.com/test/rich-results"></a>https://search.google.com/test/rich-results</p>
        <div class="image-box">
            <img src="@/assets/file-struct.png" alt="The file sctructure I used for my Vue App"/>
            <img src="@/assets/script.png" alt="The script section of my component"/>
            <img src="@/assets/template.png" alt="The file sctructure I used for my Vue App"/>
        </div>
    </main>
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

main {
  padding: 0 60px;
}

p {
  text-align: left;
  font-size: 1.3em;
  line-height: 2em;
  margin: 0 auto;
  padding: 30px;
}

code {
  color: #f0a027;
  background-color: #1d1f21;
  padding: 9.5px;
  border-radius: 0.3em;
}

.github {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.image-box {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 auto;

}

.image-box img {
  padding: 30px;
}



</style>
