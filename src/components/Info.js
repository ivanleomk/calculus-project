import React from 'react';
import Paragraph from './Paragraph';
import Section from './Section';

const Info = () => {
    return (
        <div className = "mt-40" style = {{maxWidth:"800px"}}>
            
            
            <Section 
                header = "Why do we care about the Gini Coefficient" 
                subtitle = "and what does it do exactly" 
                />
            <Paragraph text="Inequality is one of the most pervasive threats to a society. It restricts opportunity and prevents individuals from achieving / pursuing their dreams. 
We define inequality here as differences paid in wages to different individuals." />
            

            <Paragraph text = "The Gini Coefficient measures the disparity between a hypothethical line of perfect equality and the distribution of income per percentile of the population. The Gini Coefficient measures the disparity between a hypothethical line of perfect equality and the distribution of income per percentile of the population. It can be calculated by taking the relative proportion of area A to the combined area of A and B."/>

            <Section
                header = "Calculate it!"
                subtitle = "Explore how the Gini Coeffecieint works with a mock population"
            />
        </div>
    )
}

export default Info
