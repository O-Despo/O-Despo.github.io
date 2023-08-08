---
title: "Sr Thesis"
date: 2023-02-24T00:22:46-05:00
draft: false 
---


# Evaluation of Deep Learning methods for Sentiment Analysis of Twitter Data
## [Link to main page](/srthesis)

The link above takes you to my high school senior thesis. It was completed as part of my English class and took a few months to put together. While looking back there were things I would have changed overall I am very proud of the work I did on this project.

This is a brief summary that I wrote for my application to [start up shell](https://startupshell.org/).

## Evaluation of Deep Learning methods for Sentiment Analysis of Twitter Data

**TLDR**: My senior thesis was on Recurrent Neural Networks (RNN) vs Forward Feed Neural Networks (FFNN) for short-term text analysis. 

**Problem**: My reasoning for the question: Tweets and comments tend to be pretty short, and their meaning can be interpreted from keywords, so are RNNs (more effective on long text) still worth the compute time if an FFNN will just look at the keywords? If you want a more detailed description go to the paper in the link below.

**Solution**: I got a Twitter API license collected happy and sad Tweets over a few months and used that to compare the effectiveness of RNNs and FFNNs in Sentiment Analysis. 

**Challenges**: Collecting and storing millions of tweets safely. Writing a very technical paper and giving a very technical presentation non a non-technical crowd. Building the models themselves. How do I without just looking through all the tweets, detected if they are happy or sad to build a training dataset? (solution search for emojis)

**Fails**: I still cannot run the model reliably. I spent months working on this but after hardware failures and a plethora of other challenges, I did not have a suitable enough group of models to meet my goal. Also, when collecting the data because of one indent, all the sad tweets got thrown out for a month. I lost about half a million. I now always put in checks to ensure that my data collection scripts are working as expected.

**Success**: I like to think that it was a pretty good paper. Although I was not so happy on the code side I am proud of what I accomplished. I had never written a paper that long (I am very dyslexic) and overall I think it was a success, I learned a lot.
