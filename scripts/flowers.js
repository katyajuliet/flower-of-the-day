function flower(name, description, image, collection) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.collection = collection;
}

var flower = [
  new flower(
    "Bleeding Heart",
    "Bleeding Heart flower remedy offers unconditional love to the wounded healer in all of us. It offers particular healing to those who have a broken heart due to the loss of a loved one, pet, and relationship. Bleeding Heart purifies and strengthens the heart chakra, as well as all emotions concerning love, bringing an open-hearted attitude and soothing the emotions so that one may re-invite the spirit of love into their life.",
    "bleeding-heart",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Buttercup",
    "Buttercup flower essence carries a blessing of sweetness, restoring the inner child of one's inner world. It brings joy, calm, acceptance, and genuine sweetness into body, mind, and spirit. With this essences, we are able to access the Joy of who we really are. This is a perfect essence for children, and those who wish to restore self worth, inner treasures, and the awareness of Self Love.",
    "buttercup",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Cala Lily",
    "Calla Lily flower essence purifies and balances one’s spiritual-sexual nature. This wonderful flower remedy stimulates intimacy and spiritual inspirations within a relationship, bridging the polarity between male and female energies. Calla Lily flower remedy rejuvenates, and balances one’s spiritual-sexual nature while bridging the Male/Female within. It is also beautiful to take when wishing to enhance magnetism and the sexual beauty within your life.",
    "cala-lily",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "California Poppy",
    "California Poppy flower remedy is a magical golden cup flower that enchants the soul, offering imagination and a vibrant appreciation for nature's invisible forces. It can help with the clearing of addictions and drug abuse.California Poppy flower remedy expands one’s vision so that they may experience the magic of flowers, plants, trees, animals, human beings and unseen vibrational frequencies. It ignites intuition and awareness of dreams and imagination. The essence helps those who have clairvoyant gifts. Known as ‘The Cup of Gold,” California Poppy flower remedy stimulates joy so that we may embrace the magical life we live. Great for Spiritual work and deepens one's connection with nature.",
    "california-poppy",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Fireweed",
    "Fireweed flower essence assists the restoration of one's self after a devastating loss.One of it's most powerful and telltale abilities is that this is the FIRST sign of life, the first plant and the first wild flower, to begin growing after a massive, destructive forest fire. Tall, bold and leafy, Fireweed flower essence comes up rapidly (within a week) in burned out areas of devastation, and brings not only life back to an area, but incredible beauty with its long germinal racemes of flowers. In a charred, blackened region of thousands of acres of destruction, Fireweed flower remedy will cover acres with their tall stems and lavender-colored flowers - as if to say 'Have hope, all is not lost. Even though it seems to be right now--it is not.' Fireweed begins, quite literally, the restoration of a destroyed region.",
    "fireweed",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Forget Me Not",
    "Forget Me Not flower essence enhances the awareness of karmic connections between personal relationships you may have lost connection with through loss or separation and abandoment. The essence will further your connection to the spiritual strength needed to understand such loss and serve to tighten the link and bond on a spiritual level. Garnering compassion for Self and the sweetness of one's own Soul helps one to overcome the loss and Forget Me Not is a lovely remedy for this purpose. It creates a beautiful rainbow bridge between those that have departed us and for those we have yet to meet in this life.",
    "forget-me-not",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Giant Blue Iris",
    "Giant Blue Iris flower essence facilitates one’s ability to discover the creative muse within. Arising from the shallow waters, the Giant Blue Iris shares the virtue of the blue heaven and the glorious yellow sun. It is very erect and upright, and stemming from water, personifies one’s ability to discover the creative muse within. Just as the inner sanctuary of the human soul holds the experience of emotional depth, the Giant Blue Iris serves as a symbolic paintbrush to the senses, thereby, allowing creativity to flow like a divine stream of inspiration. The Giant Blue Iris aligns beautifully with an organic flow of feeling and self-actualization.",
    "giant-blue-iris",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Hibiscus",
    "Hibiscus flower remedy energizes the first and second chakras, undoing blockages in the lower back and spine. The flower remedy assists in releasing pent up creative forces within the womb area and literally sets one free to dance again in life. The essence stimulates sexuality and passion.",
    "hibiscus",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Iris", 
    "Iris flower remedy nurtures the hardened aspects of procrastination, lack of inspiration, and dullness within. It is perfect for anyone engaged in or exploring creative arts. Iris flower essence unblocks old patterns of self-limitation and stagnation, inspiring us to the heights of beauty and grace, and restoring a path to art and creativity. Known as the ‘Paintbrush to the Soul’ Iris flower remedy is connected to the ‘Rainbow Goddess Iris” and is one of the best remedies to promote healing when one may feel dried up. Iris moistens the hardened aspects of the soul such as stagnation and procrastination. The essence enables one to find harmonious connection to the flow of self expression.", 
    "iris", 
    "Pure & Wild Single Essences"),
  
  new flower(
    "Mimmulus",
    "Mimulus aids in curbing unwanted fear, and has the ability to bring one into a more advanced state of serenity. The center of fear in the brain is found in the Amygdala – a most base portion of the brain that developed very early on the evolutionary scale.  Not all fear is bad – some fear can be beneficial at times. Yet when excess terror presents itself, it becomes time to research the root of fear. It helps us to move out of a primitive fear-based mindset, and toward a more advanced and spiritual existence of serenity.",
    "mimmulus",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Morning Glory",
    "Morning Glory flower remedy aligns the individual's quest for new vision and vitality. It opens one to New Awareness and strengthens ones ability to speak, share, shine in the world. Morning Glory awakens the spirit, attuning the individual to his or her own shimmering brilliance and vitality. It can serve as a rejuvenating tonic, melting away patterns of lethargy or inertia and allowing one to feel embraced by the jubilant forces of nature. Morning Glory flower remedy rises up in the early morning with an eager will to meet the rising sun in the great blue sky.",
    "morning-glory",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Nootka Rose",
    "Nootka Rose flower essence gently and uniquely stimulates the heart chakra to open to Cosmic Love and Wisdom. The color of the flower gently and uniquely stimulates the heart chakra, opening  to Cosmic Love and Wisdom. It's vibrant yellow center allows integration within the solar plexus, the center of the body, where one is able to integtate love. Deep roots of this flower remedy reflect tenacity and endurance.",
    "nootka-rose",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Plumeria",
    "The remedy assists those who must establish balance between an overly active constitution and stagnation. Plumeria assists with dreamtime, sleep, and protects one from the invasion of nighttime fears. It enhances prayer, meditation, and rest.",
    "plumeria",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Pomegranate",
    "Pomegranate restores self-nurturing and regenerates fertility. A symbol of fertility, this flower remedy helps to identify long-buried emotional needs, especially in relation to the mother, childbearing and creative issues. The essence helps one balance the busy and overwhelming demands of managing home and family, or the outer world demands and internal needs.",
    "pomegranate",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Purple Crocus",
    "Purple Crocus flower remedy softens held in pain and grief, assisting one to release tension around these experiences. This flower remedy helps us to feel the energy of loss and grief with acceptance and surrender. The individual is then able to find balance between the healing of deep grief and the restoration of Hope and Love.",
    "purple-crocus",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Shooting Star",
    "The flower remedy re-patterns the soul force and reconnects them to their true, cosmic origins, allowing them to embrace earthly existence and offer their special gifts to the more earth-bound beings in their midst. Especially helpful for children with traumatic births, but a potent elixir for curing alienation on all levels.",
    "shooting-star",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Sophie's Rose",
    "Sophie's Rose flower essence is a healing remedy to endow one’s heart with the delicate virtues of Love. This gentle pink rose grows abundantly throughout the spring and summer. Sophie's Rose delicate baby buds reflect the way of gentle unfolding and tender love.",
    "sophies-rose",
    "Pure & Wild Single Essences"
  ),
  new flower(
    "Violet", 
    "Violet flower essence assists one with self-liberation, self-expression and individuation. Violet flower essence is especially attuned to highly evolved and fragile souls, assisting with self-liberation, self-expression and individuation, while retaining the refined and tender qualities of their feminine beauty. In a sense, violet flowers call out, “Come and see me,” thereby, balancing a force of receptive beauty with a new found personal will. The Purple Violet flower remedy bridges the virtues and qualities of the violet with the inner foundation of self worth and courage.", 
    "violet", 
    "Pure & Wild Single Essences"
    ),
  
  new flower(
    "White Magnolia",
    "White Magnolia flower essence is used during a healing crisis, moderating the aggravation of symptoms that often happen when healing takes place. White Magnolia flower essence is used during a healing crisis, moderating the aggravation of symptoms that often happen when healing takes place. It regulates the strength of the healing energy provided by the flower remedy mix to the optimum level and stabilizes protection from the outside energies, including X-rays, negative states of consciousness, and all forms of radiation",
    "white-magnolia",
    "Pure & Wild Single Essences"
  ),

  new flower(
    "Zinnia", 
    "Zinnia flower essence enhances your ability to rediscover the child-like qualities of playfulness, innocence and adventure.", 
    "Zinnia", 
    "Pure & Wild Single Essences"
    ),
];

function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

window.addEventListener("load", (event) => {
  var index = getRandom(20);
  var currentFlower = flower[index];

  document.getElementById(
    "imageContainer"
  ).innerHTML = `<img src="./images/${currentFlower.image}.png"
  class="lg:max-w-md lg:w-1/3 md:w-1/3 w-5/6" alt="">`;

  document.getElementById("mainText").innerHTML = currentFlower.name;
  document.getElementById("description").innerHTML = currentFlower.description;
  document.getElementById(
    "collection"
  ).innerHTML = `Collection: ${currentFlower.collection}`;
});
