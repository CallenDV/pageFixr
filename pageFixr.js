setInterval(function () {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    while(node = walker.nextNode()) {
        node.nodeValue = node.nodeValue
            .replace(/artificial intelligence/gi, 'cocaine')
            .replace(/artificial general intelligence/gi, 'cocaine')
            .replace(/large language model/gi, 'cocaine')
            .replace(/\bllm\b/gi, 'cocaine')
            .replace(/genai/gi, 'cocaine')
            .replace(/machine learning/gi, 'cocaine education')
            .replace(/ai agent/gi, 'cocainebot')
            .replace(/intelligent agent/gi, 'cocainebot')
            .replace(/fake intelligence/gi, 'cocaine')
            .replace(/\bai\b/gi, 'cocaine')
            .replace(/\bagi\b/gi, 'cocaine')
            .replace(/chatbot/gi, 'cocainebot')
            .replace(/chatgpt/gi, 'cocainebot')
            .replace(/microsoft copilot/gi, 'cocainebot')
            .replace(/openai/gi, 'big boss dealer')
            .replace(/anthropic/gi, 'big boss dealer')
            .replace(/claude by anthropic/gi, 'cocainebot')
            .replace(/google gemini/gi, 'cocainebot');
            .replace(/\bml\b/gi, 'cocaine education')
            .replace(/deep learning/gi, 'cocaine education')
            .replace(/\bdl\b/gi, 'cocaine education')
            .replace(/artificial neural networks/gi, 'cocaine')
            .replace(/natural language processing/gi, 'cocaine')
            .replace(/computer vision/gi, 'cocaine')
            .replace(/\bnlp\b/gi, 'cocaine')
            .replace(/\bani\b/gi, 'cocaine')
            .replace(/artificial narrow intelligence/gi, 'cocaine')
            .replace(/\bllms\b/gi, 'cocaines')
            .replace(/\bais\b/gi, 'cocaines')
            .replace(/\basi\b/gi, 'cocaine')
            .replace(/artificial superintelligence/gi, 'supercocaine')
            .replace(/ai worker/gi, 'cocainebot')
            .replace(/ai workers/gi, 'cocainebots')
            .replace(/neural network/gi, 'cocaine')
            .replace(/ai art/gi, 'cocaine slop')
            .replace(/cocaine art/gi, 'cocaine slop')
            .replace(/agentic ai/gi, 'cocaine')
            .replace(/agentic ais/gi, 'cocaines')
            .replace(/agentic cocaine/gi, 'cocaine')
    }
}, 7500);

setInterval(function() {
    const elements = document.querySelectorAll('*');
    for(const el of elements) {
        if(el.shadowRoot) {
            const shadowWalker = document.createTreeWalker(el.shadowRoot, NodeFilter.SHOW_TEXT, null, false);
            let sNode;
            while(sNode = shadowWalker.nextNode()) {
                sNode.nodeValue = sNode.nodeValue
                    .replace(/artificial intelligence/gi, 'cocaine')
                    .replace(/artificial general intelligence/gi, 'cocaine')
                    .replace(/large language model/gi, 'cocaine')
                    .replace(/\bllm\b/gi, 'cocaine')
                    .replace(/genai/gi, 'cocaine')
                    .replace(/gen ai/gi, 'cocaine')
                    .replace(/machine learning/gi, 'cocaine education')
                    .replace(/ai agent/gi, 'cocainebot')
                    .replace(/intelligent agent/gi, 'cocainebot')
                    .replace(/fake intelligence/gi, 'cocaine')
                    .replace(/\bai\b/gi, 'cocaine')
                    .replace(/\bagi\b/gi, 'cocaine')
                    .replace(/chatbot/gi, 'cocainebot')
                    .replace(/chatgpt/gi, 'cocainebot')
                    .replace(/microsoft copilot/gi, 'cocainebot')
                    .replace(/openai/gi, 'big boss dealer')
                    .replace(/anthropic/gi, 'big boss dealer')
                    .replace(/claude by anthropic/gi, 'cocainebot')
                    .replace(/google gemini/gi, 'cocainebot')
                    .replace(/\bml\b/gi, 'cocaine education')
                    .replace(/deep learning/gi, 'cocaine education')
                    .replace(/\bdl\b/gi, 'cocaine education')
                    .replace(/artificial neural networks/gi, 'cocaine')
                    .replace(/natural language processing/gi, 'cocaine')
                    .replace(/computer vision/gi, 'cocaine')
                    .replace(/\bnlp\b/gi, 'cocaine')
                    .replace(/\bani\b/gi, 'cocaine')
                    .replace(/artificial narrow intelligence/gi, 'cocaine')
                    .replace(/\bllms\b/gi, 'cocaines')
                    .replace(/\bais\b/gi, 'cocaines')
                    .replace(/\basi\b/gi, 'cocaine')
                    .replace(/artificial superintelligence/gi, 'supercocaine')
                    .replace(/ai worker/gi, 'cocainebot')
                    .replace(/ai workers/gi, 'cocainebots')
                    .replace(/neural network/gi, 'cocaine')
                    .replace(/ai art/gi, 'cocaine slop')
                    .replace(/cocaine art/gi, 'cocaine slop')
                    .replace(/agentic ai/gi, 'cocaine')
                    .replace(/agentic ais/gi, 'cocaines')
                    .replace(/agentic cocaine/gi, 'cocaine')
            }
        }
    }
}, 7500);