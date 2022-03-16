// CARD CREATION SCRIPT

            //Set up layout vars for card creation
            var main = document.getElementById("main");
            var cardGrid = document.createElement("div");
            cardGrid.setAttribute("class", "grid-row");
            cardGrid.setAttribute("id", "card-grid");

            //Individual card structure creation
            var createCard = function(result){
                
                //Card div 
                var card = document.createElement("div");
                card.setAttribute("class", "card");
                
                    //Card-inner div 
                    var cardInner = document.createElement("div");
                    cardInner.setAttribute("class", "card-inner");
                    card.append(cardInner);

                        //Card-front div 
                        var cardFront = document.createElement("div");
                        cardFront.setAttribute("class", "card-front");
                        cardInner.append(cardFront);

                            //Card-front image, including extracting image ID
                            var cardImage = document.createElement("img");
                            var imageRef = result.cardBackImage.asset._ref;
                            var imageID = imageRef.replace('image-','').replace('-jpg','');
                            cardImage.src = `https://cdn.sanity.io/images/6dyl9k59/production/${imageID}.jpg`
                            cardFront.append(cardImage);

                        //Card-back div 
                        var cardBack = document.createElement("div");
                        cardBack.setAttribute("class", "card-back");
                        cardInner.append(cardBack);

                        if(result._type === "senator"){
                            //Card-header div 
                            var cardHeader = document.createElement("div");
                            cardHeader.setAttribute("class", "card-header");
                            cardBack.append(cardHeader);

                                //Name
                                var name = document.createElement("h1");
                                name.innerHTML = result.name;
                                cardHeader.append(name);

                                //Party & State
                                var partyAndState = document.createElement("h2");
                                var partyInitial = result.party.partyName.slice(0,1);
                                partyAndState.innerHTML = `(${partyInitial}) ${result.state.stateAbbr}`;
                                cardHeader.append(partyAndState);

                            //Card-body div
                            var cardBody = document.createElement("div");
                            cardBody.setAttribute("class", "card-body");
                            cardBack.append(cardBody);

                                //Leadership-positions
                                var leadershipPositions = document.createElement("div");
                                leadershipPositions.setAttribute("class", "leadership-positions");
                                cardBody.append(leadershipPositions);

                                    //Leadership positions label
                                    var leadershipPositionsLabel = document.createElement("h3");
                                    leadershipPositionsLabel.innerHTML = "Leadership Positions"
                                    leadershipPositions.append(leadershipPositionsLabel);

                                    //Leadership positions content
                                    var leadershipPositionsContent = document.createElement("p");
                                    if (result.leadershipPositions) {
                                        stringifyPositions = result.leadershipPositions.join(', ');
                                    } else {
                                        stringifyPositions = 'none';
                                    }
                                    leadershipPositionsContent.innerHTML = stringifyPositions;
                                    leadershipPositions.append(leadershipPositionsContent);

                                //Committee-assignments
                                var committeeAssignments = document.createElement("div");
                                committeeAssignments.setAttribute("class", "committee-assignments");
                                cardBody.append(committeeAssignments);

                                    //Leadership positions label
                                    var committeeAssignmentsLabel = document.createElement("h3");
                                    committeeAssignmentsLabel.innerHTML = "Committee Assignments"
                                    committeeAssignments.append(committeeAssignmentsLabel);

                                    //Leadership positions content
                                    var committeeAssignmentsContent = document.createElement("p");
                                    if (result.committeeAssignments) {
                                        stringifyPositions = result.committeeAssignments.join(', ');
                                    } else {
                                        stringifyPositions = 'none';
                                    }
                                    committeeAssignmentsContent.innerHTML = stringifyPositions;
                                    committeeAssignments.append(committeeAssignmentsContent);

                                //Assumed-office
                                var assumedOffice = document.createElement("div");
                                assumedOffice.setAttribute("class", "assumed-office");
                                cardBody.append(assumedOffice);

                                    //Assumed office label
                                    var assumedOfficeLabel = document.createElement("h3");
                                    assumedOfficeLabel.innerHTML = "Assumed Office"
                                    assumedOffice.append(assumedOfficeLabel);

                                    //Assumed office content
                                    var assumedOfficeContent = document.createElement("p");
                                    assumedOfficeContent.innerHTML = result.assumedOffice;
                                    assumedOffice.append(assumedOfficeContent);

                                //Reelection-year
                                var reelectionYear = document.createElement("div");
                                reelectionYear.setAttribute("class", "reelection-year");
                                cardBody.append(reelectionYear);

                                    //Reelection year label
                                    var reelectionYearLabel = document.createElement("h3");
                                    reelectionYearLabel.innerHTML = "Reelection Year"
                                    reelectionYear.append(reelectionYearLabel);

                                    //Reelection year content
                                    var reelectionYearContent = document.createElement("p");
                                    reelectionYearContent.innerHTML = result.reelectionYear;
                                    reelectionYear.append(reelectionYearContent);

                            //Card Link (button)
                            var cardButton = document.createElement("a");
                            cardButton.setAttribute("class", "card-button");
                            cardButton.innerHTML = "Visit Senate.gov Website";
                            cardButton.href = result.cardLink;
                            cardButton.target = "_blank";
                            cardBack.append(cardButton);
                        } 
                        else if(result._type === "supremeCourt"){
                            //Card-header div 
                            var cardHeader = document.createElement("div");
                            cardHeader.setAttribute("class", "card-header");
                            cardBack.append(cardHeader);

                                //Name
                                var name = document.createElement("h1");
                                name.innerHTML = result.name;
                                cardHeader.append(name);

                                //Position
                                var position = document.createElement("h2");
                                position.innerHTML = result.position;
                                cardHeader.append(position);

                            //Card-body div
                            var cardBody = document.createElement("div");
                            cardBody.setAttribute("class", "card-body");
                            cardBack.append(cardBody);

                                //Nominated-by
                                var nominatedBy = document.createElement("div");
                                nominatedBy.setAttribute("class", "nominated-by");
                                cardBody.append(nominatedBy);

                                    //Nominated by label
                                    var nominatedByLabel = document.createElement("h3");
                                    nominatedByLabel.innerHTML = "Nominated By"
                                    nominatedBy.append(nominatedByLabel);

                                    //Nominated by content
                                    var nominatedByContent = document.createElement("p");
                                    nominatedByContent.innerHTML = result.nominatedBy;
                                    nominatedBy.append(nominatedByContent);

                                //Member-since
                                var memberSince = document.createElement("div");
                                memberSince.setAttribute("class", "member-since");
                                cardBody.append(memberSince);

                                    //Leadership positions label
                                    var memberSinceLabel = document.createElement("h3");
                                    memberSinceLabel.innerHTML = "Justice Since"
                                    memberSince.append(memberSinceLabel);

                                    //Leadership positions content
                                    var memberSinceContent = document.createElement("p");
                                    memberSinceContent.innerHTML = result.memberSince;
                                    memberSince.append(memberSinceContent);

                                //Circuit-assignments
                                var circuitAssignments = document.createElement("div");
                                circuitAssignments.setAttribute("class", "circuit-assignments");
                                cardBody.append(circuitAssignments);

                                    //Circuit Assignments label
                                    var circuitAssignmentsLabel = document.createElement("h3");
                                    circuitAssignmentsLabel.innerHTML = "Circuit Assignments"
                                    circuitAssignments.append(circuitAssignmentsLabel);

                                    //Circuit Assignments content
                                    var circuitAssignmentsContent = document.createElement("p");
                                    stringifyPositions = result.circuitAssignments.join(', ');
                                    circuitAssignmentsContent.innerHTML = stringifyPositions;
                                    circuitAssignments.append(circuitAssignmentsContent);

                                //Segal-Cover score
                                var segalCoverScore = document.createElement("div");
                                segalCoverScore.setAttribute("class", "segal-cover");
                                cardBody.append(segalCoverScore);

                                    //Segal-Cover score label
                                    var segalCoverScoreLabel = document.createElement("h3");
                                    segalCoverScoreLabel.innerHTML = "Segal-Cover Ideology Score"
                                    segalCoverScore.append(segalCoverScoreLabel);

                                    //Segal-Cover score question mark button
                                    var segalCoverScoreQuestion = document.createElement("a");
                                    segalCoverScoreQuestion.setAttribute("class", "segal-cover-question");
                                    segalCoverScoreQuestion.innerHTML = "?";
                                    segalCoverScoreQuestion.href = "https://en.wikipedia.org/wiki/Segal%E2%80%93Cover_score";
                                    segalCoverScoreQuestion.target = "_blank";
                                    segalCoverScore.append(segalCoverScoreQuestion);

                                    //Segal-Cover score content
                                    var segalCoverBar = document.createElement("div");
                                    segalCoverBar.setAttribute("class", "segal-cover-bar");
                                    segalCoverScore.append(segalCoverBar);

                                    var segalCoverScoreNumberWrap = document.createElement("div");
                                    segalCoverScoreNumberWrap.setAttribute("class", "segal-cover-number-wrap");
                                    segalCoverScore.append(segalCoverScoreNumberWrap);

                                    //var cleanedScore = Math.trunc(result.segalCoverScore * 100);
                                    
                                    var segalCoverScoreNumber = document.createElement("p");
                                    segalCoverScoreNumber.innerHTML = result.segalCoverScore;
                                    segalCoverScoreNumberWrap.append(segalCoverScoreNumber);

                                    if(result.segalCoverScore >= 90){
                                        segalCoverScoreNumberWrap.setAttribute("style", `margin-left: calc(${result.segalCoverScore}% - 1.5rem)`);
                                        segalCoverBar.setAttribute("style", `background: linear-gradient(90deg, #E39600 calc(${result.segalCoverScore}% - .5rem), #e6e6e6 calc(${result.segalCoverScore}% - 1.5rem));`);
                                    } else if(result.segalCoverScore <=20 ){
                                        segalCoverScoreNumberWrap.setAttribute("style", `margin-left: ${result.segalCoverScore}%`);
                                        segalCoverBar.setAttribute("style", `background: linear-gradient(90deg, #E39600 calc(${result.segalCoverScore}% + .5rem), #e6e6e6 calc(${result.segalCoverScore}% - 1.5rem));`);
                                    } else {
                                        segalCoverScoreNumberWrap.setAttribute("style", `margin-left: calc(${result.segalCoverScore}% - .75rem)`);
                                        segalCoverBar.setAttribute("style", `background: linear-gradient(90deg, #E39600 calc(${result.segalCoverScore}% - .25rem), #e6e6e6 calc(${result.segalCoverScore}% - 1.5rem));`);
                                    }

                                    var segalCoverBottomLabels = document.createElement("p");
                                    segalCoverBottomLabels.setAttribute("class", "segal-cover-bottom-labels");
                                    segalCoverBottomLabels.innerHTML = '<span class="segal-cover-conservative">Conservative</span><span class="segal-cover-center">|</span><span class="segal-cover-liberal">Liberal</span>';
                                    segalCoverScore.append(segalCoverBottomLabels);

                            //Card Link (button)
                            var cardButton = document.createElement("a");
                            cardButton.setAttribute("class", "card-button");
                            cardButton.innerHTML = "Visit Wikipedia Page";
                            cardButton.href = result.cardLink;
                            cardButton.target = "_blank";
                            cardBack.append(cardButton);
                        } 
                        else  if(result._type === "representative"){
                            //Card-header div 
                            var cardHeader = document.createElement("div");
                            cardHeader.setAttribute("class", "card-header");
                            cardBack.append(cardHeader);

                                //Name
                                var name = document.createElement("h1");
                                name.innerHTML = result.name;
                                cardHeader.append(name);

                                //Party & State & District
                                var partyStateDistrict = document.createElement("h2");
                                var partyInitial = result.party.partyName.slice(0,1);
                                partyStateDistrict.innerHTML = `(${partyInitial}) ${result.state.stateAbbr}-${result.district}`;
                                cardHeader.append(partyStateDistrict);

                            //Card-body div
                            var cardBody = document.createElement("div");
                            cardBody.setAttribute("class", "card-body");
                            cardBack.append(cardBody);

                                //Leadership-positions
                                var leadershipPositions = document.createElement("div");
                                leadershipPositions.setAttribute("class", "leadership-positions");
                                cardBody.append(leadershipPositions);

                                    //Leadership positions label
                                    var leadershipPositionsLabel = document.createElement("h3");
                                    leadershipPositionsLabel.innerHTML = "Leadership Positions"
                                    leadershipPositions.append(leadershipPositionsLabel);

                                    //Leadership positions content
                                    var leadershipPositionsContent = document.createElement("p");
                                    if (result.leadershipPositions) {
                                        stringifyPositions = result.leadershipPositions.join(', ');
                                    } else {
                                        stringifyPositions = 'none';
                                    }
                                    leadershipPositionsContent.innerHTML = stringifyPositions;
                                    leadershipPositions.append(leadershipPositionsContent);

                                //Committee-assignments
                                var committeeAssignments = document.createElement("div");
                                committeeAssignments.setAttribute("class", "committee-assignments");
                                cardBody.append(committeeAssignments);

                                    //Leadership positions label
                                    var committeeAssignmentsLabel = document.createElement("h3");
                                    committeeAssignmentsLabel.innerHTML = "Committee Assignments"
                                    committeeAssignments.append(committeeAssignmentsLabel);

                                    //Leadership positions content
                                    var committeeAssignmentsContent = document.createElement("p");
                                    if (result.committeeAssignments) {
                                        stringifyPositions = result.committeeAssignments.join(', ');
                                    } else {
                                        stringifyPositions = 'none';
                                    }
                                    committeeAssignmentsContent.innerHTML = stringifyPositions;
                                    committeeAssignments.append(committeeAssignmentsContent);

                                //Assumed-office
                                var assumedOffice = document.createElement("div");
                                assumedOffice.setAttribute("class", "assumed-office");
                                cardBody.append(assumedOffice);

                                    //Assumed office label
                                    var assumedOfficeLabel = document.createElement("h3");
                                    assumedOfficeLabel.innerHTML = "Assumed Office"
                                    assumedOffice.append(assumedOfficeLabel);

                                    //Assumed office content
                                    var assumedOfficeContent = document.createElement("p");
                                    assumedOfficeContent.innerHTML = result.assumedOffice;
                                    assumedOffice.append(assumedOfficeContent);

                            //Card Link (button)
                            var cardButton = document.createElement("a");
                            cardButton.setAttribute("class", "card-button");
                            cardButton.innerHTML = "Visit Wikipedia Page";
                            cardButton.href = result.cardLink;
                            cardButton.target = "_blank";
                            cardBack.append(cardButton);
                        } 
                        else  if(result._type === "cabinet"){
                            //Card-header div 
                            var cardHeader = document.createElement("div");
                            cardHeader.setAttribute("class", "card-header");
                            cardBack.append(cardHeader);

                                //Name
                                var name = document.createElement("h1");
                                name.innerHTML = result.name;
                                cardHeader.append(name);

                                //Position
                                var position = document.createElement("h2");
                                position.innerHTML = result.position;
                                cardHeader.append(position);

                            //Card-body div
                            var cardBody = document.createElement("div");
                            cardBody.setAttribute("class", "card-body");
                            cardBack.append(cardBody);

                                //Order of Succession
                                var succession = document.createElement("div");
                                succession.setAttribute("class", "order-of-succession");
                                cardBody.append(succession);

                                    //Order of Succession label
                                    var successionLabel = document.createElement("h3");
                                    successionLabel.innerHTML = "Order of Succession"
                                    succession.append(successionLabel);

                                    //Order of Succession content
                                    var successionContent = document.createElement("p");
                                    successionContent.innerHTML = result.succession;
                                    succession.append(successionContent);

                                //Confirmation Committee
                                var confirmationCommittee = document.createElement("div");
                                confirmationCommittee.setAttribute("class", "circuit-assignments");
                                cardBody.append(confirmationCommittee);

                                    //Confirmation Committee label
                                    var confirmationCommitteeLabel = document.createElement("h3");
                                    confirmationCommitteeLabel.innerHTML = "Confirmation Committee"
                                    confirmationCommittee.append(confirmationCommitteeLabel);

                                    //Confirmation Committee content
                                    var confirmationCommitteeContent = document.createElement("p");
                                    stringifyPositions = result.confirmationCommittee.join(', ');
                                    confirmationCommitteeContent.innerHTML = stringifyPositions;
                                    confirmationCommittee.append(confirmationCommitteeContent);


                            //Card Link (button)
                            var cardButton = document.createElement("a");
                            cardButton.setAttribute("class", "card-button");
                            cardButton.innerHTML = "Visit Wikipedia Page";
                            cardButton.href = result.cardLink;
                            cardButton.target = "_blank";
                            cardBack.append(cardButton);

                            //Card Link2 (button)
                            var cardButton2 = document.createElement("a");
                            cardButton2.setAttribute("class", "card-button button2");
                            cardButton2.innerHTML = "Visit Department Website";
                            cardButton2.href = result.cardLink2;
                            cardButton2.target = "_blank";
                            cardBack.append(cardButton2);
                        }
                return card;
            };
