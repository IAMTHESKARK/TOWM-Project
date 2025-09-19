// The Other Wes Moore Interactive JavaScript
class TOWMProject {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.initAnimations();
        this.setupModal();
    }

    bindEvents() {
        // Explore button functionality
        const exploreBtn = document.getElementById('explore-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                this.scrollToTimeline();
            });
        }

        // Learn more buttons
        const learnMoreBtns = document.querySelectorAll('.learn-more');
        learnMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-target');
                this.showCharacterModal(target);
            });
        });

        // Timeline events
        const timelineEvents = document.querySelectorAll('.timeline-event');
        timelineEvents.forEach(event => {
            event.addEventListener('click', () => {
                const year = event.getAttribute('data-year');
                this.showTimelineModal(year);
            });
        });

        // Navigation smooth scrolling
        this.setupSmoothScrolling();
    }

    scrollToTimeline() {
        const timeline = document.getElementById('timeline');
        if (timeline) {
            timeline.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    showCharacterModal(character) {
        const characterData = {
            author: {
                title: "Wes Moore (Author)",
                content: `
                    <h3>The Author's Journey</h3>
                    <p><strong>Full Name:</strong> Westley Watende Omari Moore</p>
                    <p><strong>Born:</strong> October 15, 1978</p>
                    
                    <h4>Key Achievements:</h4>
                    <ul>
                        <li>Rhodes Scholar at Oxford University</li>
                        <li>Paratrooper and officer in the U.S. Army</li>
                        <li>White House Fellow during the Bush administration</li>
                        <li>Investment banker on Wall Street</li>
                        <li>Bestselling author and television producer</li>
                        <li>Host of "Coming Back with Wes Moore" on PBS</li>
                    </ul>
                    
                    <h4>Turning Points:</h4>
                    <p>Despite early struggles with academic performance and minor run-ins with the law, 
                    Wes Moore's life changed when his mother sent him to military school. The structure, 
                    discipline, and mentorship he received there helped him focus his energy and talents 
                    in positive directions.</p>
                    
                    <h4>Current Status:</h4>
                    <p>Moore continues to be a prominent voice in discussions about education, youth development, 
                    and social justice. He serves as a CEO and has written several bestselling books.</p>
                `
            },
            other: {
                title: "Wes Moore (The Other)",
                content: `
                    <h3>The Other Wes Moore's Path</h3>
                    <p><strong>Born:</strong> 1975</p>
                    <p><strong>Current Status:</strong> Serving life sentence without parole</p>
                    
                    <h4>Background:</h4>
                    <p>Like the author, the other Wes Moore grew up in Baltimore in a single-parent household. 
                    However, his path diverged significantly due to various factors including:</p>
                    
                    <ul>
                        <li>Early exposure to drug dealing</li>
                        <li>Lack of consistent positive male role models</li>
                        <li>Limited educational opportunities and support</li>
                        <li>Economic pressures and neighborhood influences</li>
                    </ul>
                    
                    <h4>The Crime:</h4>
                    <p>In 2000, Wes Moore was convicted for his role in an armed robbery that resulted 
                    in the death of Baltimore County Police Sergeant Bruce Prothero. Though he maintains 
                    he didn't pull the trigger, he was sentenced to life in prison without the possibility 
                    of parole.</p>
                    
                    <h4>Reflection:</h4>
                    <p>Through his correspondence with the author, the other Wes Moore has shown remorse 
                    and reflection on the choices that led to his current situation. His story serves as 
                    a powerful reminder of how circumstances and decisions can dramatically alter life's trajectory.</p>
                `
            }
        };

        const data = characterData[character];
        if (data) {
            this.createModal(data.title, data.content);
        }
    }

    showTimelineModal(year) {
        const timelineData = {
            1975: {
                title: "1975 - Birth Year",
                content: `
                    <h3>The Beginning of Two Parallel Lives</h3>
                    <p>Both Wes Moores were born in 1975 in Baltimore, Maryland, into similar circumstances:</p>
                    
                    <h4>Common Background:</h4>
                    <ul>
                        <li>African-American families</li>
                        <li>Born in Baltimore</li>
                        <li>Single-mother households (eventually)</li>
                        <li>Working-class neighborhoods</li>
                        <li>Limited economic resources</li>
                    </ul>
                    
                    <p>Despite these similar starting points, their lives would take dramatically different paths. 
                    This shared beginning makes their divergent stories all the more compelling and instructive 
                    about the power of choices, circumstances, and opportunities.</p>
                `
            },
            1984: {
                title: "1984 - A Father's Death",
                content: `
                    <h3>The Loss That Changed Everything</h3>
                    <p>When the author Wes Moore was just 3 years old, his father died suddenly from acute epiglottitis. 
                    This traumatic event would have lasting impacts on his life and his family's trajectory.</p>
                    
                    <h4>Immediate Impact:</h4>
                    <ul>
                        <li>Financial strain on the family</li>
                        <li>Loss of a male role model</li>
                        <li>Increased responsibility for his mother</li>
                        <li>Emotional trauma for young Wes</li>
                    </ul>
                    
                    <h4>Long-term Consequences:</h4>
                    <p>This loss contributed to Wes's early behavioral problems and academic struggles. 
                    However, it also motivated his mother to make significant sacrifices to ensure her 
                    children had better opportunities, eventually leading to the decision to send him 
                    to military school.</p>
                `
            },
            1991: {
                title: "1991 - First Arrest",
                content: `
                    <h3>A Turning Point That Wasn't</h3>
                    <p>The other Wes Moore's first arrest marked the beginning of his involvement with 
                    the criminal justice system. Unlike the author Wes, who had family support and 
                    alternative pathways, this arrest began a cycle that would be difficult to break.</p>
                    
                    <h4>The Incident:</h4>
                    <p>Details of the first arrest involved minor drug-related charges, but it represented 
                    a critical juncture where intervention could have made a difference.</p>
                    
                    <h4>Missed Opportunities:</h4>
                    <ul>
                        <li>Limited access to quality legal representation</li>
                        <li>Lack of effective intervention programs</li>
                        <li>Continued exposure to negative influences</li>
                        <li>Economic pressures that made illegal activities attractive</li>
                    </ul>
                    
                    <p>This moment illustrates how early intervention and support systems can be crucial 
                    in determining whether someone breaks the cycle of crime or continues down a destructive path.</p>
                `
            },
            2000: {
                title: "2000 - The Final Divergence",
                content: `
                    <h3>When Paths Become Permanent</h3>
                    <p>The year 2000 marked the ultimate divergence between the two Wes Moores. While the author 
                    was pursuing his education and building his career, the other Wes was convicted of murder.</p>
                    
                    <h4>The Crime:</h4>
                    <p>During an armed robbery of a jewelry store, Baltimore County Police Sergeant Bruce Prothero 
                    was killed. Though Wes Moore maintains he didn't pull the trigger, his participation in the 
                    robbery made him legally responsible for the officer's death.</p>
                    
                    <h4>The Trial and Sentence:</h4>
                    <ul>
                        <li>Convicted of first-degree murder</li>
                        <li>Sentenced to life in prison without parole</li>
                        <li>Appeals were unsuccessful</li>
                        <li>Currently incarcerated in Maryland</li>
                    </ul>
                    
                    <h4>Reflection:</h4>
                    <p>This tragic outcome represents not just individual choices, but systemic failures 
                    and missed opportunities for intervention. It highlights the importance of early 
                    intervention, education, mentorship, and addressing root causes of crime.</p>
                `
            }
        };

        const data = timelineData[year];
        if (data) {
            this.createModal(data.title, data.content);
        }
    }

    createModal(title, content) {
        // Remove existing modal if present
        const existingModal = document.querySelector('.modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal HTML
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2>${title}</h2>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;

        // Add to page
        document.body.appendChild(modal);

        // Show modal
        modal.style.display = 'block';

        // Bind close events
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            setTimeout(() => modal.remove(), 300);
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                setTimeout(() => modal.remove(), 300);
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                setTimeout(() => modal.remove(), 300);
            }
        });
    }

    setupModal() {
        // Additional modal setup if needed
        console.log('Modal system initialized');
    }

    setupSmoothScrolling() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.card, .timeline-event');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Utility function for comparison analysis
    generateComparison() {
        return {
            similarities: [
                "Both born in 1975 in Baltimore",
                "Both raised by single mothers",
                "Both experienced poverty and urban challenges",
                "Both had early academic struggles",
                "Both were intelligent and capable"
            ],
            differences: [
                "Author had family support for education",
                "Other Wes lacked consistent positive role models",
                "Author went to military school, Other Wes stayed in public school",
                "Author had access to opportunities and mentorship",
                "Other Wes faced more immediate economic pressures"
            ],
            keyFactors: [
                "Family expectations and support",
                "Educational opportunities",
                "Mentorship and role models",
                "Economic stability",
                "Community resources",
                "Personal choices and decision-making"
            ]
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TOWMProject();
    console.log('The Other Wes Moore project initialized successfully');
});

// Additional utility functions
function formatQuote(quote, author) {
    return `<blockquote>"${quote}"<cite>— ${author}</cite></blockquote>`;
}

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOWMProject;
}