#!/usr/bin/env node
// Scaffold MDX stubs for every service sub-page.
// Run once to seed src/content/services/{category}/{subservice}.mdx.
// Re-running overwrites existing files — edit MDX directly after seeding.

import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_ROOT = resolve(__dirname, "../src/content/services");

// Each entry: [categorySlug, subSlug, title, intro, whatToExpect, whenToBook[]]
const services = [
  ["general-dentistry", "oral-exams-x-rays", "Oral Exams & X-Rays",
    "Thorough exams and low-dose digital X-rays let us catch cavities, gum issues, and alignment problems before they become painful or expensive.",
    "A comprehensive check of teeth, gums, bite, and soft tissue, paired with targeted digital X-rays when needed. We walk through every finding with you before anything is planned.",
    ["You're overdue for a routine checkup (more than six months)", "You've moved and need a new dental home", "You're noticing discomfort, sensitivity, or a change in your bite", "You want baseline X-rays before cosmetic or orthodontic work"]],

  ["general-dentistry", "dental-cleanings", "Dental Cleanings",
    "Professional scaling and polishing that removes plaque and tartar buildup beyond what brushing at home can reach.",
    "A hygienist scales away hardened tartar, polishes the enamel, and flosses between every tooth. Expect a fresh-mouth feel — and fewer surprises at your next exam.",
    ["Six months since your last cleaning", "Bleeding gums when you brush or floss", "Visible staining from coffee, tea, or tobacco", "Bad breath that doesn't go away with brushing"]],

  ["general-dentistry", "composite-fillings", "Composite Fillings",
    "Tooth-coloured fillings that repair cavities and restore strength while blending with your natural enamel.",
    "We remove the decayed portion, bond a composite resin matched to your tooth colour, and shape it to your bite. Most fillings are done in a single visit.",
    ["You've felt sudden sensitivity to cold or sweets", "You see a dark spot or pit in a tooth", "A dentist has flagged early decay on an X-ray", "An old metal filling is cracked, stained, or leaking"]],

  ["general-dentistry", "oral-cancer-screening", "Oral Cancer Screening",
    "A quick, non-invasive visual and physical exam of the mouth, tongue, and throat — early detection saves lives.",
    "Part of every comprehensive exam. Takes under five minutes and checks for unusual patches, lumps, or tissue changes that warrant follow-up.",
    ["You use or have used tobacco", "You drink alcohol regularly", "A sore or patch in your mouth hasn't healed in two weeks", "You want the peace of mind of an annual screening"]],

  ["gum-disease-bad-breath", "periodontal-gum-care", "Periodontal Care",
    "Targeted treatment for gum disease — from gingivitis through advanced periodontitis — designed to save teeth and stabilize your smile.",
    "After measuring pocket depths and reviewing X-rays, we tailor a plan that may include deep cleaning, localized antibiotics, and a more frequent hygiene schedule.",
    ["Gums bleed when you brush or floss", "Your gums look red, swollen, or have receded", "You've been told you have 'deep pockets' at a previous visit", "Teeth feel loose or have shifted"]],

  ["gum-disease-bad-breath", "halitosis-treatment", "Halitosis Treatment",
    "Persistent bad breath is almost always treatable once the underlying cause is identified — typically bacteria, dry mouth, or gum inflammation.",
    "We examine the mouth, review medications and diet, and build a targeted plan that can include professional cleaning, periodontal care, and at-home protocol changes.",
    ["Bad breath hasn't improved despite good home care", "A partner or family member has mentioned it", "You have a dry mouth or take medications that dry out your mouth", "You want to rule out a dental cause before seeing a physician"]],

  ["gum-disease-bad-breath", "scaling-root-planing", "Scaling & Root Planing",
    "A deep cleaning that reaches below the gumline to remove bacteria and smooth tooth roots so gums can reattach and heal.",
    "Usually performed over one or two visits with local numbing for comfort. Often paired with a more frequent hygiene recall afterward.",
    ["You've been diagnosed with periodontitis", "Pocket depths of 4 mm or greater were found at your exam", "Tartar has accumulated below the gumline", "You want to prevent tooth loss from gum disease"]],

  ["restorative-dentistry", "tooth-coloured-fillings", "Tooth-Coloured Fillings",
    "Composite and ceramic fillings that restore a decayed or broken tooth without the look of metal.",
    "A conservative option for small to medium cavities. We bond, shape, and polish the material so the restoration disappears into the surrounding enamel.",
    ["A cavity has been diagnosed and is small enough for a filling", "An older silver filling is cracked or stained", "You want a more aesthetic repair of a chipped front tooth", "You have a mild allergy or sensitivity to amalgam"]],

  ["restorative-dentistry", "dental-crowns-bridges", "Dental Crowns & Bridges",
    "Crowns rebuild a damaged tooth to its original strength; bridges replace a missing tooth by anchoring to the teeth on either side.",
    "Most crowns and bridges are completed over two visits: one to prepare and impression, one to bond the final restoration. Temporary coverings protect the teeth in between.",
    ["A tooth has a large crack or has had a root canal", "A filling has become too large to replace again", "You're missing a single tooth and have healthy neighbours", "An old crown looks worn, discoloured, or fits poorly"]],

  ["restorative-dentistry", "dental-dentures", "Dental Dentures",
    "Full and partial dentures replace missing teeth and restore chewing, speech, and facial support.",
    "After impressions and a bite check, we fit a custom denture calibrated to your jaw. Adjustments over the following weeks fine-tune comfort and fit.",
    ["You're missing several teeth and want a removable option", "Your current denture is loose, sore, or worn", "You want to explore implant-supported dentures for more stability", "You need an immediate denture after extractions"]],

  ["restorative-dentistry", "dental-implants", "Dental Implants",
    "Titanium implants replace the root of a missing tooth, supporting a crown, bridge, or denture that feels and functions like a natural tooth.",
    "We plan the case with 3D imaging, place the implant, and let it integrate with the jawbone over a few months before attaching the final restoration. Free consults available.",
    ["You're missing one or more teeth", "A denture or bridge no longer feels stable", "You want the longest-lasting tooth replacement option", "You'd like to prevent bone loss where a tooth was lost"]],

  ["cosmetic-care", "teeth-whitening", "Teeth Whitening",
    "In-office and take-home whitening systems that safely lift years of coffee, tea, wine, and tobacco staining.",
    "Choose a one-visit in-chair treatment or custom take-home trays you wear at night. We check sensitivity and existing dental work first so the result is even.",
    ["Your teeth look duller or yellower than you'd like", "You have a wedding, graduation, or event coming up", "Drugstore strips aren't making a difference", "You want a controlled, professional approach to sensitivity"]],

  ["cosmetic-care", "porcelain-veneers", "Porcelain Veneers",
    "Ultra-thin porcelain shells bonded to the front of teeth to refine shape, colour, and alignment in as few as two visits.",
    "We plan the smile design together, gently prepare the teeth, and bond custom veneers crafted by a dental ceramist. Results are durable and stain-resistant.",
    ["Chipped, worn, or uneven front teeth bother you", "Gaps or mild crowding don't need orthodontics", "Teeth are too stained for whitening to correct", "You want a long-lasting cosmetic upgrade"]],

  ["cosmetic-care", "cosmetic-bonding", "Cosmetic Bonding",
    "Tooth-coloured resin sculpted directly onto a tooth to repair chips, close small gaps, or reshape minor irregularities — usually in a single visit.",
    "A more conservative option than veneers, preserving most of the natural tooth. Bonding is hand-sculpted, cured with light, and polished to match surrounding enamel.",
    ["A small chip from biting or an accident", "A narrow gap between two front teeth", "A single tooth that looks slightly misshapen", "You want to try a cosmetic change before committing to veneers"]],

  ["cosmetic-care", "gum-contouring", "Gum Contouring",
    "Gentle reshaping of the gumline so teeth appear more even and the smile feels balanced.",
    "Performed with a dental laser or fine instruments under local numbing. Healing is typically quick, with visible results after a few days.",
    ["Your smile looks 'gummy' when you grin", "Gumline is uneven across the front teeth", "You're planning veneers and want the frame to match", "A tooth looks shorter than its neighbour"]],

  ["orthodontics", "invisalign", "Invisalign",
    "A series of clear, removable aligners that gradually straighten teeth — more discreet than braces and easier to maintain.",
    "After 3D scans and a treatment plan, you'll wear each aligner for about a week. Most cases complete in six to eighteen months. Free consults available.",
    ["Crowded or crooked teeth bother you", "You declined braces as a teen and want another option", "Bite shifts have returned after previous orthodontics", "You want a discreet option for work or social reasons"]],

  ["orthodontics", "traditional-braces", "Traditional Braces",
    "Metal or ceramic brackets and wires that move teeth predictably — especially strong for complex alignment and bite corrections.",
    "Regular adjustment visits every four to six weeks. Most comprehensive cases finish in 18 to 24 months, with retainers afterward.",
    ["Complex crowding or rotation that aligners can't handle", "A significant bite correction is needed", "You prefer the certainty of a fixed appliance", "You want an affordable orthodontic option"]],

  ["urgent-dental-care", "root-canal-therapy", "Root Canal Therapy",
    "A treatment that saves a tooth whose nerve is infected or dying — cleans the canal, disinfects, and seals it so the tooth can be restored.",
    "Performed under local numbing. Most root canals are comfortable — often less so than the toothache that brought you in. A crown usually follows to protect the tooth.",
    ["Severe, lingering tooth pain", "Sensitivity to hot or cold that lasts after the stimulus is removed", "Swelling or a 'pimple' on the gum near a tooth", "A tooth has darkened after trauma"]],

  ["urgent-dental-care", "wisdom-tooth-extraction", "Wisdom Tooth Extraction",
    "Removal of third molars that are impacted, causing pressure, or making it hard to clean neighbouring teeth. Free consults available.",
    "We review a panoramic X-ray, discuss sedation options, and plan the extraction. Most patients are back to normal activities in a few days.",
    ["Recurring pain or swelling at the back of the jaw", "A dentist has flagged impacted wisdom teeth", "Your orthodontist recommends removal before or after treatment", "Food keeps getting trapped near partially erupted molars"]],

  ["additional-care", "sedation-dentistry", "Sedation Dentistry",
    "Calming options — from mild nitrous oxide to oral sedation — for patients who feel anxious or who have longer procedures planned.",
    "We review your medical history, discuss which option fits, and make sure you're comfortable at every step. An escort home is required for oral sedation.",
    ["Dental visits cause real anxiety, not just mild nerves", "A procedure is long and you'd rather rest through it", "A strong gag reflex makes routine care hard", "Previous experiences have made dental work difficult"]],

  ["additional-care", "tmj-treatment", "TMJ Treatment",
    "Conservative therapy for jaw joint pain, clicking, and related headaches — often starting with a custom night guard and postural guidance.",
    "We examine the joint, bite, and muscles, then build a plan that may include a custom appliance, exercises, and referrals when needed.",
    ["Jaw pain, clicking, or locking", "Morning headaches or sore jaw muscles", "You grind or clench your teeth at night", "Your bite feels 'off' or teeth are wearing unevenly"]],

  ["childrens-care", "sealants-fluoride", "Dental Sealants & Fluoride",
    "Thin protective coatings on molars and targeted fluoride treatments that dramatically lower a child's cavity risk.",
    "Sealants are painted onto the grooves of back teeth and cured with light — no drilling. Fluoride varnish is brushed on in under a minute.",
    ["Your child's first adult molars have come in", "They've had cavities before", "Deep grooves are visible on the back teeth", "They're at higher cavity risk due to diet or hygiene habits"]],

  ["childrens-care", "space-maintainers", "Space Maintainers",
    "Small appliances that hold space when a baby tooth is lost too early — preventing crowding problems in the adult teeth that follow.",
    "Custom-fit at a short visit and monitored at regular checkups. Removed once the adult tooth is ready to erupt.",
    ["A baby tooth was lost to decay or injury well before its time", "Your dentist flagged an early extraction", "The neighbouring teeth are starting to tilt into the gap", "You want to avoid orthodontics later if possible"]],

  ["childrens-care", "dental-cavities", "Dental Cavities Treatment",
    "Gentle, child-focused treatment of cavities — from small fillings to protective crowns on baby teeth — explained at a pace kids can follow.",
    "We use tell-show-do, child-sized instruments, and lots of encouragement. Sedation options are available for longer visits.",
    ["A checkup flagged a cavity on a baby or adult tooth", "Your child has mentioned pain when eating sweets", "A visible pit or dark spot on a tooth", "A chipped tooth with exposed darker tissue"]],

  ["childrens-care", "preventive-care", "Preventive Care",
    "Regular exams, gentle cleanings, and education that set kids up for a lifetime of healthy smiles.",
    "Short, fun visits that build comfort with the dentist. Includes growth monitoring, coaching on brushing technique, and diet advice tailored to age.",
    ["Your child is turning one (first-birthday first visit)", "It's been six months since their last cleaning", "They've started losing baby teeth", "You want help coaching brushing and flossing"]],
];

const toMdx = ([cat, sub, title, intro, whatToExpect, whenToBook]) => {
  const bullets = whenToBook.map((b) => `- ${b}`).join("\n");
  return `export const meta = {
  category: ${JSON.stringify(cat)},
  slug: ${JSON.stringify(sub)},
  title: ${JSON.stringify(title)},
  intro: ${JSON.stringify(intro)},
};

# ${title}

${intro}

## What to expect

${whatToExpect}

## When to book

${bullets}

## Book your appointment

Call us at [403-300-2233](tel:+14033002233) or [book online](https://dental4.me/rundlehornsmilesdental/1). Free consults are available for implants, Invisalign, and wisdom-tooth removal.
`;
};

const run = async () => {
  for (const row of services) {
    const [cat, sub] = row;
    const dir = resolve(CONTENT_ROOT, cat);
    const file = resolve(dir, `${sub}.mdx`);
    await mkdir(dir, { recursive: true });
    await writeFile(file, toMdx(row));
    console.log(`✓ ${cat}/${sub}.mdx`);
  }
  console.log(`\nWrote ${services.length} MDX files to ${CONTENT_ROOT}`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
